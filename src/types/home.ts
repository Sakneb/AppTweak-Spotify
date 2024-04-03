export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Artist {
  id: string;
  name: string;
}

export interface Track {
  id: string;
  name: string;
  artists: Artist[];
  album: {
    name: string;
    images: Image[];
  };
  duration_ms: number;
  preview_url: string;
}

export interface Playlist {
  id: string;
  name: string;
  owner: {
    display_name: string;
  };
  images: Image[];
}

export interface SpotifyResponse<T> {
  items: T[];
}
