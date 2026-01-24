import { ImageSourcePropType } from 'react-native';

// <======== Exporting Interfaces ========>
export interface TabsBarIconProps {
    focused: boolean,
    title: string,
    icon: ImageSourcePropType,
};

export interface FeaturedListingCardProps {
    banner: ImageSourcePropType,
    title: string,
    location: string,
    price: number,
    rating: number,
};

export interface RecommendedListingCardProps {
    banner: ImageSourcePropType,
    title: string,
    location: string,
    price: number,
};