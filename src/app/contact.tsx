"use client";

import {
    Typography,
    Card,
    CardBody,
    Radio,
    Input,
    Textarea,
    IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { Github, Linkedin, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
    return (
        <section className="px-8 py-16">
            <div className="container mx-auto mb-12 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-4">
                    Contact Me
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full lg:w-5/12 !text-gray-500"
                >
                    Feel free to reach out through the contact details below.
                </Typography>
            </div>

            {/* Contact Info Cards */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Email */}
                <Card className="shadow-sm border border-gray-200">
                    <CardBody className="text-center space-y-2">
                        <EnvelopeIcon className="h-8 w-8 mx-auto text-gray-700" />
                        <Typography variant="h6" color="blue-gray">
                            Email
                        </Typography>
                        <Typography className="text-sm text-gray-500">
                            fadli.hidayat.nur@gmail.com
                        </Typography>
                    </CardBody>
                </Card>

                {/* Phone */}
                <Card className="shadow-sm border border-gray-200">
                    <CardBody className="text-center space-y-2">
                        <PhoneIcon className="h-8 w-8 mx-auto text-gray-700" />
                        <Typography variant="h6" color="blue-gray">
                            Phone
                        </Typography>
                        <Typography className="text-sm text-gray-500">
                            +62 899-8705-010
                        </Typography>
                    </CardBody>
                </Card>

                {/* Location */}
                <Card className="shadow-sm border border-gray-200">
                    <CardBody className="text-center space-y-2">
                        <MapPinIcon className="h-8 w-8 mx-auto text-gray-700" />
                        <Typography variant="h6" color="blue-gray">
                            Location
                        </Typography>
                        <Typography className="text-sm text-gray-500">
                            West Java, Indonesia
                        </Typography>
                    </CardBody>
                </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <Button
                    color="black"
                    size="lg"
                    className="flex items-center gap-2"
                    onClick={() => window.open("https://mail.google.com/mail/u/0/?fs=1&to=fadli.hidayat.nur@gmail.com&tf=cm")}
                >
                    <EnvelopeIcon className="h-5 w-5" /> Send Email
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2"
                    onClick={() =>
                        window.open("https://www.linkedin.com/in/fadli-nurhidayat", "_blank")
                    }
                >
                    <Linkedin className="h-5 w-5" /> Connect on LinkedIn
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2"
                    onClick={() =>
                        window.open("https://github.com/vrhidayat", "_blank")
                    }
                >
                    <Github className="h-5 w-5" /> Github
                </Button>
            </div>
        </section>
    );
}

export default Contact;
