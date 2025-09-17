export const uploadToCloudinary = async (file, folder = "Daaruttahseen") => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "daaruttahseen_images");
  formData.append("folder", folder);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) throw new Error("Failed to upload image");

  const data = await res.json();
  return data.secure_url;
};
