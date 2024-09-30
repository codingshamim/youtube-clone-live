import ProfileTabItem from "./ProfileTabItem";

export default function ProfileTabs() {
  return (
    <nav
      className="pb-1 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      aria-label="Tabs"
      role="tablist"
      aria-orientation="horizontal"
    >
      <ProfileTabItem link="/codingshamim">Home</ProfileTabItem>
      <ProfileTabItem link="/codingshamim/playlist">Playlist</ProfileTabItem>
      <ProfileTabItem link="/codingshamim/community">Community</ProfileTabItem>
    </nav>
  );
}
