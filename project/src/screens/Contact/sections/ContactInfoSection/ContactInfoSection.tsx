import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

const formFields = [
  {
    id: "name",
    label: "Name",
    placeholder: "Your Full Name",
    type: "input",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "your.email@example.com",
    type: "input",
  },
  {
    id: "subject",
    label: "Subject",
    placeholder: "Inquiry about...",
    type: "input",
  },
  {
    id: "message",
    label: "Message",
    placeholder: "Type your detailed message here.",
    type: "textarea",
  },
];

export const ContactInfoSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-white rounded-[10px] border border-solid border-[#dee1e6] shadow-[0px_0px_1px_#171a1f0d,0px_0px_2px_#171a1f14]">
      <CardContent className="flex flex-col p-[33px]">
        <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-3xl tracking-[0] leading-9 whitespace-nowrap mb-[42px]">
          Send a Booking Inquiry
        </h2>

        <form action="https://formspree.io/f/xvgvqljy" method="POST" className="flex flex-col gap-[18px]">
          {formFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-[9px]">
              <Label
                htmlFor={field.id}
                className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-xs tracking-[0] leading-5"
              >
                {field.label}
              </Label>
              {field.type === "input" ? (
                <Input
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  className="bg-white rounded-md border border-solid border-[#dee1e6] [font-family:'Open_Sans',Helvetica] font-normal text-[#565d6d] text-sm tracking-[0] leading-[22px] h-[39px] px-3"
                />
              ) : (
                <div className="relative">
                  <Textarea
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    className="bg-white rounded-md border border-solid border-[#dee1e6] [font-family:'Open_Sans',Helvetica] font-normal text-[#565d6d] text-sm tracking-[0] leading-[22px] h-[131px] px-3 pt-2 resize-none"
                  />
                  <img
                    className="absolute right-1 bottom-1 w-3 h-3"
                    alt="Resizing handle"
                    src="/resizing-handle.svg"
                  />
                </div>
              )}
            </div>
          ))}

          <Button
            type="submit"
            className="w-full bg-[#18386e] hover:bg-[#18386e]/90 border-0 h-10 rounded-md [font-family:'Open_Sans',Helvetica] font-semibold text-white text-sm text-center tracking-[0] leading-[22px] mt-[6px]"
          >
            Send Inquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
