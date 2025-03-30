const { exec } = require("child_process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`);
        reject(stderr);
      } else {
        resolve(stdout.trim());
      }
    });
  });
};

const checkRepoStatus = async () => {
  console.log("\nChecking repository status...");
  try {
    const status = await runCommand("git status");
    console.log(status);
  } catch (error) {
    console.error("Failed to check repository status.");
  }
};

const addChanges = async () => {
  console.log("\nAdding all changes to staging...");
  try {
    await runCommand("git add .");
    console.log("All changes added to staging.");
  } catch (error) {
    console.error("Failed to add changes.");
  }
};

const commitChanges = async () => {
  console.log("\nPreparing to commit changes...");
  rl.question("Enter commit message: ", async (message) => {
    if (!message.trim()) {
      console.log("Commit message cannot be empty.");
      commitChanges(); // Retry if empty
    } else {
      try {
        const commit = await runCommand(`git commit -m "${message}"`);
        console.log(commit || "Changes committed successfully.");
      } catch (error) {
        console.error("Failed to commit changes.");
      }
      mainMenu(); // Return to the main menu
    }
  });
};

const pushToMaster = async () => {
  console.log("\nPushing changes to the master branch...");
  try {
    const push = await runCommand("git push origin master");
    console.log(push || "Changes pushed to the master branch.");
  } catch (error) {
    console.error("Failed to push changes.");
  }
};

const mainMenu = () => {
  console.log("\nGit Assistant");
  console.log("1. Check repository status");
  console.log("2. Add changes");
  console.log("3. Commit changes");
  console.log("4. Push to master branch");
  console.log("5. Exit");

  rl.question("\nChoose an option (1-5): ", async (choice) => {
    switch (choice.trim()) {
      case "1":
        await checkRepoStatus();
        mainMenu();
        break;
      case "2":
        await addChanges();
        mainMenu();
        break;
      case "3":
        commitChanges();
        break; // Commit will return to mainMenu
      case "4":
        await pushToMaster();
        mainMenu();
        break;
      case "5":
        console.log("Exiting Git Assistant. Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid option. Try again.");
        mainMenu();
    }
  });
};

mainMenu();
