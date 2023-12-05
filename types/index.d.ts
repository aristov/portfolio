export enum BackgroundSize
{
  cover = 'cover',
  contain = 'contain',
}

export enum SectionType
{
  albums = 'albums',
  documents = 'documents',
  articles = 'articles',
  contacts = 'contacts',
}

export type Section = {
  path: string;
  title: string;
  owner_id: number;
  type: SectionType;
}

export type Link = {
  url: string;
  icon: string;
  text: string;
}

export type Contacts = {
  email: string;
  phone_number: string;
  links: Link[];
}

export type Author = {
  title: string;
  name: string;
  email: string;
}

export type Config = {
  title: string;
  description: string;
  theme_color: string;
  background_size: BackgroundSize;
  sections: Section[];
  not_found: string;
  author: Author;
  prev_slide: string;
  next_slide: string;
  contacts: Contacts;
}

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
