export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  id: number;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string; //This tells type that description is optional, thus the objects that doesn't have description property will still be accepted.
  image: string;
}
