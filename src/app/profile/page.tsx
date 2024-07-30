"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  MailOpenIcon,
  PhoneIcon,
  TwitterIcon,
  LinkedinIcon,
  TrophyIcon,
  StarIcon,
  MedalIcon,
  GlobeIcon,
} from "lucide-react";
import Link from "next/link";
import { User } from "@/payload-types";
import { useAuth } from "@/hooks/use-auth";

const Profile = ({ user }: { user: User }) => {
  const { signOut } = useAuth();

  return (
    <MaxWidthWrapper>
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-muted rounded-t-lg p-6 md:p-10 mt-5">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="font-medium text-sm text-black">{user.email}</p>
            </div>
          </div>
        </div>
        <div className="bg-background rounded-b-lg p-6 md:p-10 grid gap-8">
          <div>
            <h2 className="text-lg font-semibold">Contact</h2>
            <div className="grid gap-4 mt-4">
              <div className="flex items-center gap-2">
                <MailOpenIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">john@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <GlobeIcon className="h-5 w-5 text-muted-foreground" />
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  johndoe.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <TwitterIcon className="h-5 w-5 text-muted-foreground" />
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  @johndoe
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="h-5 w-5 text-muted-foreground" />
                <Link
                  href="#"
                  className="text-muted-foreground hover:underline"
                  prefetch={false}
                >
                  linkedin.com/in/johndoe
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Achievements</h2>
            <ul className="grid gap-4 mt-4">
              <li className="flex items-center gap-2">
                <TrophyIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Awarded Best Frontend Developer of the Year 2022
                </span>
              </li>
              <li className="flex items-center gap-2">
                <StarIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Featured in Top 100 Developers on Dribbble
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MedalIcon className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Recipient of the Hacktoberfest 2021 award
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Profile;
