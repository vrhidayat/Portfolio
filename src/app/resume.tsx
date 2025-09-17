"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Briefcase, Code, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function QualificationTabs() {
    return (
        <section className="container mx-auto py-16">
            <h2 className="text-3xl font-bold text-center mb-10">Qualification</h2>

            <Tabs defaultValue="education" className="w-full">
                {/* Tabs Menu */}
                <div className="flex justify-center">
                    <TabsList className="grid w-[500px] grid-cols-2">
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                    </TabsList>
                </div>

                {/* --- EDUCATION TAB --- */}
                <TabsContent value="education" className="mt-10 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex justify-between items-center">
                                <span>
                                    🎓 Bachelor of Applied Computer Science (S.Tr.Kom) <br />
                                    <span className="text-sm font-normal text-gray-500">
                                        Politeknik Enjindring Indorama · 2021 – 2025
                                    </span>
                                </span>
                                <span className="bg-black text-white text-xs px-3 py-1 rounded">
                                    GPA: 3.58/4.00
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-2">
                                Passionate about Software Engineering.
                            </p>
                            <p>
                                <strong>Relevant Coursework:</strong> Data Structures & Algorithms,
                                Database Systems, Software Engineering, Data Mining/Machine Learning,
                                Web Programming, Mobile Programming, Desktop Programming
                            </p>
                            <p>
                                <strong>Final Project:</strong> OptiGrade
                            </p>
                        </CardContent>
                    </Card>

                    {/* <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>🏆 Achievements</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-gray-600">
                                <p>
                                    <strong>Cumlaude</strong> <br />
                                    Highest GPA among graduates, Class of 2025
                                </p>
                                <p>
                                    <strong>Graduate</strong> <br />
                                    Bangkit Academy by Google, GoTo, Traveloka
                                </p>
                                <p>
                                    <strong>Research Grant Awardee</strong> <br />
                                    Stunting Detection Research funded by Ministry of Education,
                                    Science, and Technology
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>🏫 College Experience</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-gray-600">
                                <p>
                                    <strong>Contributor</strong> <br />
                                    Contribute 2 major software development projects
                                </p>
                                <p>
                                    <strong>Tech Community Organizer</strong> <br />
                                    Founded a student community and organized workshops as backend programmer
                                </p>
                            </CardContent>
                        </Card>
                    </div> */}
                </TabsContent>

                {/* --- EXPERIENCE TAB --- */}
                <TabsContent value="experience" className="mt-10 space-y-6">
                    <Card className="rounded-xl border shadow-sm">
                        <CardHeader className="flex flex-row items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-md bg-muted">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-bold">
                                        Full-stack Developer Intern
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        PT. Sava Jaya Anugerah (Sept
                                        2024 – Des 2025)
                                    </p>
                                </div>
                            </div>
                            <Badge variant="secondary" className="font-medium">
                                Internship
                            </Badge>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="text-sm">
                                Contribute to 3 Web-based Application using Laravel and jQuery AJAX to streamline internal Operations.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-xl border shadow-sm">
                        <CardHeader className="flex flex-row items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-md bg-muted">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-bold">
                                        Cloud Computing Cohort
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        Bangkit Academy by Google, GoTo, Traveloka • 1 semester (Feb
                                        2024 – Jun 2024)
                                    </p>
                                </div>
                            </div>
                            <Badge variant="secondary" className="font-medium">
                                Academic
                            </Badge>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="text-sm">
                                Completed a comprehensive cloud computing curriculum from basic to advanced using Google Cloud Platform, accompanied by soft skills and English skills training.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-xl border shadow-sm">
                        <CardHeader className="flex flex-row items-start justify-between">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-md bg-muted">
                                    <Code className="w-5 h-5" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-bold">
                                        Compunova
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">
                                        Part of a team of four in developing custom app solutions for small businesses, contribute as backend developer. (2022 – Present)
                                    </p>
                                </div>
                            </div>
                            <Badge variant="secondary" className="font-medium">
                                Part Time/Freelance
                            </Badge>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <p className="text-sm">
                                Completed a comprehensive cloud computing curriculum from basic to advanced using Google Cloud Platform, accompanied by soft skills and English skills training.
                            </p>
                        </CardContent>
                    </Card>
                </TabsContent>

            </Tabs>
        </section>
    );
}
