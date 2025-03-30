import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PhoneNumberUtil } from "google-libphonenumber";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

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
import { Link } from "react-router-dom";

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const SupportForm = () => {
  // Define the schema for form validation
  const formSchema = z.object({
    fname: z.string().min(1, "Prénom is required"),
    Lname: z.string().min(1, "Nom is required"),

    // phone: z.string().min(6, "Téléphone is required"),
    phone: z.string().refine((value) => isPhoneValid(value), {
      message: "Téléphone is required",
    }),

    enterprise: z.string().min(1, "Enterprise is required"),
    email: z.string().email("Email address is required"),
    category: z.string().min(1, "Catégorie is required"),
    subCategory: z.string().min(1, "Sous-catégorie is required"),
    // categoryDetails: z.string().min(1, "Détail de catégorie is required"),
    object: z.string().min(1, "Objet is required"),
    message: z.string().min(1, "Message is required"),
  });

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      Lname: "",
      phone: "",
      enterprise: "",
      email: "",
      category: "",
      subCategory: "",
      // categoryDetails: "",
      object: "",
      message: "",
    },
  });

  const [hasInteracted, setHasInteracted] = useState(false);

  // General
  //               Account & Login
  //               Legal & Privacy Support
  //               Partners & Affiliates
  //               Shop & Purchases
  //               Services
  //               Community & Feedback
  //               Media & News

  const subCategoryData = {
    General: [
      "Company Relative Information",
      "Mission & Vision",
      "Updates & Announcements",
      "Frequently Asked Questions (FAQs)",
    ],
    "Account & Login": [
      "Create an account",
      "Modify account details",
      "Delete an account",
      "Login issues / password recovery",
      "Account security & 2FA",
      "Suspended/Banned Accounts",
    ],
    "Legal & Privacy Support": [
      "Terms of Sale",
      "Terms of Use",
      "Privacy Policy",
      "Trademarks",
      "Patents",
      "Copyrights",
      "Open Source Licenses",
      "GDPR & Data Protection",
      "User Rights & Consent Management",
    ],
    "Partners & Affiliates": [
      "How to become a partner",
      "Partnership benefits",
      "Affiliate requirements",
      "Earnings & Commission Structure",
      "Payment & Payout Schedule",
    ],
    "Shop & Purchases": [
      "Placing an order",
      "Order tracking & invoices",
      "Cancel / Refund policy",
      "Failed transactions",
      "Accepted payment methods",
      "Promo codes & discounts",
    ],
    Services: [
      "Web Development Services",
      "Mobile Development Services",
      "Custom Software Solutions",
      "UX/UI Design",
      "SEO & Performance Optimization",
      "Support & Maintenance Plans",
      "Web Consulting & MVP Development",
    ],
    "Community & Feedback": [
      "Forums & Discussions",
      "Member Directory",
      "Events & Webinars",
      "Submit feedback on DIGITALY services",
      "Report issues & suggest improvements",
    ],
    "Media & News": [
      "Press Releases",
      "Partnerships Announcements",
      "Tech Innovations",
      "In The Media",
      "Brand Guidelines",
      "Press Kit",
      "Media Gallery",
      "Social Media",
      "Press Contacts",
    ],
  };

  const CategoryData = [
   "General",
   "Account & Login", 
   "Legal & Privacy Support",
   "Partners & Affiliates",
   "Shop & Purchases",
   "Services",
   "Community & Feedback",
   "Media & News"
  ]

 

  const handleCategoryChange = (value) => {
    setValue("category", value); // Update category
    setValue("subCategory", ""); // Reset subcategory
    trigger("category"); // Trigger validation
  };


 

  

  const onSubmit = async (data) => {
    // event.preventDefault();

    console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:5000/contactus",
        data
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your form has been submitted successfully.",
          confirmButtonText: "OK",
        });
        reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was an error submitting your form. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[96%]">
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
            {...register("fname")}
            className="contact-input"
          />
          {errors.fname && (
            <p className="support-input-error-text">{errors.fname.message}</p>
          )}
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
            {...register("Lname")}
            className="contact-input"
          />
          {errors.Lname && (
            <p className="support-input-error-text">{errors.Lname.message}</p>
          )}
        </div>
      </div>

      <div className="contact-us-row-formField">
        <div className="col-md-6 contact-phoneNumberInput-div contact-us-input-left">
          <Label htmlFor="" className="contact-form-input-label">
            Téléphone<span>*</span>
          </Label>

          <PhoneInput
            defaultCountry="fr"
            onChange={(value) => {
              setValue("phone", value, {
                shouldValidate: hasInteracted,
              }); // Update value
              if (!hasInteracted) setHasInteracted(true); // Mark as interacted
              if (hasInteracted) trigger("phone"); // Validate only after interaction
            }}
            value={getValues("phone")}
          />

          {errors.phone && hasInteracted && (
            <p className="support-input-error-text">{errors.phone.message}</p>
          )}
        </div>

        <div className="col-12 col-md-6 contact-us-input-right">
          <Label htmlFor="enterprise" className="contact-form-input-label">
            Enterprise<span>*</span>
          </Label>
          <Input
            id="enterprise"
            placeholder="Exemple : Le nom de votre entreprise"
            type="text"
            name="enterprise"
            {...register("enterprise")}
            className="contact-input"
          />
          {errors.enterprise && (
            <p className="support-input-error-text">
              {errors.enterprise.message}
            </p>
          )}
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
          {...register("email")}
          className="contact-input"
        />
        {errors.email && (
          <p className="support-input-error-text">{errors.email.message}</p>
        )}
      </div>

      <div className="col-md-12   contact-us-input-objet" >
        <Label htmlFor="category" className="contact-form-input-label">
          {" "}
          Catégorie <span>*</span>{" "}
        </Label>

        <Select
          onValueChange={(value) => handleCategoryChange(value)}
           defaultValue={getValues("category")}

           
          
        >
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="Select Support" />
          </SelectTrigger>
          <SelectContent portal={true}>
            <SelectGroup>
              <SelectLabel>Catégorie</SelectLabel>
              {CategoryData.map((category) => (
                
                
                <SelectItem key={category} value={category.toString()} className="support-selectItem">
                  {category}
                </SelectItem>
              ))}
            


            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="support-input-error-text">{errors.category.message}</p>
        )}
      </div>

     

      {getValues("category") && ( 

          <div className="col-md-12   contact-us-input-objet">
            <Label htmlFor="subCategory" className="contact-form-input-label">
              Sous-catégorie <span>*</span>{" "}
            </Label>

            <Select
              onValueChange={(value) => {
                setValue("subCategory", value);
                trigger("subCategory");
              }}
              defaultValue={getValues("subCategory")}
            >
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select Support Type" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectGroup>
                  <SelectLabel>Sous-catégorie</SelectLabel>

                  {(subCategoryData[getValues("category")] || []).map(
                    (subCategory, index) => (
                      <SelectItem key={index} value={subCategory}>
                        {subCategory}
                      </SelectItem>
                    )
                  )}
                
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.subCategory && (
              <p className="support-input-error-text">
                {errors.subCategory.message}
              </p>
            )}
        </div> 
    
      )}

      {/* <div className="col-md-12   contact-us-input-objet">
          <Label
            htmlFor="categoryDetails"
            className="contact-form-input-label"
          >
            Détail de catégorie<span>*</span>{" "}
          </Label>

          <Select
            onValueChange={(value) => {
              setValue("categoryDetails", value);
              trigger("categoryDetails");
            }}
            defaultValue={getValues("categoryDetails")}
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
          {errors.categoryDetails && (
            <p className="support-input-error-text">
              {errors.categoryDetails.message}
            </p>
          )}
        </div> */}

      <div className="col-md-12   contact-us-input-objet">
        <Label htmlFor="object" className="contact-form-input-label">
          Objet<span>*</span>
        </Label>
        <Input
          id="object"
          placeholder="Choississez votre type de demande"
          type="text"
          name="object"
          {...register("object")}
          className="contact-input"
        />
        {errors.object && (
          <p className="support-input-error-text">{errors.object.message}</p>
        )}
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
          {...register("message")}
          className="contact-input"
        />
        {errors.message && (
          <p className="support-input-error-text">{errors.message.message}</p>
        )}
      </div>

      <div className="col-md-12 contact-us-checkbox ">
        <Checkbox style={{ paddingLeft: "0px" }} />

        <p>
          En envoyant ce formulaire, je donne mon accord pour être recontacté
          par la société{" "}
          <span>
            <br />
          </span>{" "}
          DIGITALY et j'accepte la politique de confidentialité de l'entreprise.
        </p>
      </div>

      <div className="col-md-12 contact-us-submitBtn">
        {/* <button type="submit">Envoyer le message</button> */}
        <Button type="submit">Envoyer le message</Button>
      </div>
    </form>
  );
};

export default SupportForm;
