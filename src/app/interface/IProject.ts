export interface IProject {
  imgSrc: string;
  alt: string;
  title: string;
  width: string;
  height: string;
  description: string;
  links: [
    {
      name: string;
      href: string;
    }
  ];
}
