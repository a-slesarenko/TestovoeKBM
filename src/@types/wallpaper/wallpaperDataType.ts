export interface Data {
  total: number;
  total_pages: number;
  results: Wallpaper[];
}

export interface Wallpaper {
  id: string;
  height: number;
  urls: Urls;
  description: string;
  alt_description: string;
  likes: number;
  user: User;
}

type User = {
  total_likes: number;
  name: string;
};

type Urls = {
  regular: string;
  small: string;
  thumb: string;
};
