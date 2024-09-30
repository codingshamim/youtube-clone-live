import CoverPic from "@/components/profile/CoverPic";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileTabs from "@/components/profile/ProfileTabs";

export default function layout({ children }) {
  return (
    <>
      <CoverPic />
      <ProfileInfo />
      <div className="tabs">
        <ProfileTabs />
        <div className="mt-4 pb-14 ">{children}</div>
      </div>
    </>
  );
}
