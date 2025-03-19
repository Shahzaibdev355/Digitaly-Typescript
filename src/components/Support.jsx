import SupportHeader from "./SupportHeader";

import { useState, useEffect } from "react";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { Button } from "@/components/ui/button"; // ShadCN Button
import { Input } from "@/components/ui/input"; // ShadCN Input
import { Label } from "@/components/ui/label"; // ShadCN Label
import { Checkbox } from "@/components/ui/checkbox"; // ShadCN Checkbox
import { Textarea } from "@/components/ui/textarea"; // ShadCN Textarea

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Swal from "sweetalert2";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Support = () => {
  // console.log(Select);

  const initialFormValues = {
    fname: "",
    Lname: "",
    phone: "",
    enterprise: "",
    email: "",

    category: "",
    subCategory: "",
    categoryDetails: "",

    object: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      phone: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formValues);

    // API calls
    // const isSuccess = true; // Change this to `false` to test error popup

    try {
      const response = axios.post(
        "http://localhost:5000/contactus",
        formValues
      );

      if (response === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your form has been submitted successfully.",
          confirmButtonText: "OK",
          willClose: () => {
            window.dispatchEvent(new Event("resize")); // Forces ResizeObserver to complete
          },
        });
      }

      console.log("Form submitted:", formValues);

      setFormValues(initialFormValues);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was an error submitting your form. Please try again.",
        confirmButtonText: "OK",
      });

      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <SupportHeader />

      <div
        className="support-container mx-auto p- mt-4 "
        id="tailwind-container"
      >
        {/* defines how many columns per screen ; grid-cols-1 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-[96%]">
              <div className="contact-us-row-formField">
                <div className="col-12 col-md-6 contact-us-input-left">
                  <Label htmlFor="fname" className="contact-form-input-label">
                    Prénom<span>*</span>
                  </Label>
                  <Input
                    id="fname"
                    placeholder="Example: André"
                    type="text"
                    name="fname"
                    value={formValues.fname}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>

                <div className="col-12 col-md-6 contact-us-input-right">
                  <Label htmlFor="Lname" className="contact-form-input-label">
                    Nom<span>*</span>
                  </Label>
                  <Input
                    id="Lname"
                    placeholder="Example: Dupont"
                    type="text"
                    name="Lname"
                    value={formValues.Lname}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="contact-us-row-formField">
                <div className="col-md-6 contact-phoneNumberInput-div contact-us-input-left">
                  <Label htmlFor="" className="contact-form-input-label">
                    Téléphone<span>*</span>
                  </Label>

                  <PhoneInput
                    defaultCountry="fr"
                    onChange={handlePhoneChange}
                    value={formValues.phone}
                  />
                </div>

                <div className="col-12 col-md-6 contact-us-input-right">
                  <Label
                    htmlFor="enterprise"
                    className="contact-form-input-label"
                  >
                    Enterprise<span>*</span>
                  </Label>
                  <Input
                    id="enterprise"
                    placeholder="Exemple : Le nom de votre entreprise"
                    type="text"
                    name="enterprise"
                    value={formValues.enterprise}
                    onChange={handleChange}
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="col-12 col-md-12 contact-us-input-objet">
                <Label htmlFor="email" className="contact-form-input-label">
                  Email de contact <span>*</span>
                </Label>
                <Input
                  id="email"
                  placeholder="Exemple : contact@digitaly.fr"
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              <div className="col-md-12   contact-us-input-objet">
                <Label htmlFor="category" className="contact-form-input-label">
                  {" "}
                  Catégorie <span>*</span>{" "}
                </Label>

                <Select
                onValueChange={(value) =>
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    category: value,
                  }))
                }
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

              </div>

              <div className="col-md-12   contact-us-input-objet">
                <Label htmlFor="subCategory" className="contact-form-input-label">
                  Sous-catégorie <span>*</span>{" "}
                </Label>

                <Select
                 onValueChange={(value) =>
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    subCategory: value,
                  }))
                }
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-md-12   contact-us-input-objet">
                <Label htmlFor="categoryDetails" className="contact-form-input-label">
                  Détail de catégorie<span>*</span>{" "}
                </Label>

                <Select
                 onValueChange={(value) =>
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    categoryDetails: value,
                  }))
                }
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-md-12   contact-us-input-objet">
                <Label htmlFor="object" className="contact-form-input-label">
                  Objet<span>*</span>
                </Label>
                <Input
                  id="object"
                  placeholder="Choississez votre type de demande"
                  type="text"
                  name="object"
                  value={formValues.object}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              <div className="col-md-12 contact-us-message">
                <Label htmlFor="message" className="contact-form-input-label">
                  Message<span>*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your Query"
                  rows={4}
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  className="contact-input"
                />
              </div>

              <div className="col-md-12 contact-us-checkbox ">
                {/* <Checkbox {...label} style={{ paddingLeft: "0px" }} /> */}

                <Checkbox style={{ paddingLeft: "0px" }} />

                <p>
                  En envoyant ce formulaire, je donne mon accord pour être
                  recontacté par la société{" "}
                  <span>
                    <br />
                  </span>{" "}
                  DIGITALY et j'accepte la politique de confidentialité de
                  l'entreprise.
                </p>
              </div>

              <div className="col-md-12 contact-us-submitBtn">
                {/* <button type="submit">Envoyer le message</button> */}
                <Button type="submit">Envoyer le message</Button>
              </div>
            </form>
          </div>

          {/* Column 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">Column 2</h2>
            <p>This is the second column.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
