import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
    img: string;
    title: string;
    desc: string;
    link: string;
    showlink?: boolean;
}

export function ProjectCard({ img, title, desc, link, showlink = true }: ProjectCardProps) {
    return (
        <Card color="transparent" shadow={false}>
            <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
                <Image
                    src={img}
                    alt={title}
                    width={768}
                    height={768}
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody className="p-0">
                <a
                    href="#"
                    className="text-blue-gray-900 transition-colors hover:text-gray-800"
                >
                    <Typography variant="h5" className="mb-2">
                        {title}
                    </Typography>
                </a>
                <Typography className="mb-6 font-normal !text-gray-500">
                    {desc}
                </Typography>
                {showlink && (
                    // <Link href={link}>
                    //     <Button color="gray" size="sm">
                    //         <Github className="h-5 w-5" /> Code
                    //     </Button>
                    // </Link>
                    <Button
                        color="black"
                        size="lg"
                        className="flex items-center gap-2"
                        onClick={() => { link }}
                    >
                        <Github className="h-5 w-5" /> Code
                    </Button>
                )}
            </CardBody>
        </Card>
    );
}

export default ProjectCard;
