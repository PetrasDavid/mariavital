import { siteConfig } from "../../config/config";

const sizeClasses = {
  sm: "w-20 h-20",
  md: "w-28 h-28 md:w-32 md:h-32",
  lg: "w-32 h-32",
  xl: "w-full h-full",
};

export default function ProfileAvatar({
  size = "md",
  className = "",
  ring = true,
}) {
  const { distributor } = siteConfig;
  const { profileImage, profileImageAlt, name } = distributor;

  return (
    <div
      className={`relative overflow-hidden rounded-full shrink-0 ${
        ring ? "ring-2 ring-white/30 shadow-lg" : ""
      } ${sizeClasses[size]} ${className}`}
    >
      {profileImage ? (
        <img
          src={profileImage}
          alt={profileImageAlt || `${name} profilképe`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-brand-600 text-white flex items-center justify-center font-bold">
          {name.charAt(0)}
        </div>
      )}
    </div>
  );
}
