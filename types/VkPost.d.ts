export type VkPhotoSize = {
  type: string;
}

export type VkPostPhoto = {
  id: number;
  sizes: VkPhotoSize[];
}

export type VkPostAttachment = {
  type: string;
  photo: VkPostPhoto;
}

export type VkPost = {
  attachments: VkPostAttachment[];
  copy_history: any;
}
