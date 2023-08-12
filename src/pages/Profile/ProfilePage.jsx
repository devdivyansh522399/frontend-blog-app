import React from "react";
import MainLayout from "../../components/MainLayout";

import Introduction from "./ProfileMiddleMenu/Introduction";
import SectionMenu from "./ProfileHeader/SectionMenu";

const ProfilePage = () => {
  return (
    <MainLayout>
      <h1 className="mt-4 mx-6 rounded-xl font-roboto text-3xl font-bold">
        Profile
      </h1>
      <section className="container mx-auto max-w-7xl flex flex-col p-4">
        <SectionMenu/>
        <Introduction/>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
