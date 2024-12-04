const editorConfig = {
  menubar: false,
  plugins: "image advlist lists link",
  toolbar: "bold italic | blockquote | alignleft aligncenter alignright | image | undo redo",
  branding: false,
  height: 500,
  content_style: "body { font-family:Arial,sans-serif; font-size:12px }",
  block_formats: "Paragraph=p; Blockquote=blockquote;",
  images_upload_url: "/upload-image" // Add your image upload API endpoint
  // images_upload_handler: (blobInfo, success, failure) => {
  //   const formData = new FormData();
  //   formData.append("file", blobInfo.blob());
  //   fetch("/upload-image", { method: "POST", body: formData })
  //     .then((response) => response.json())
  //     .then((data) => success(data.location)) // Use `location` key as the image URL
  //     .catch(() => failure("Error uploading image."));
  // }
};

export default editorConfig;
