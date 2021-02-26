import { Timestamp } from "rxjs";

export class StoleBike {
    incident!: {
        description: string,
        address: string,
        title: string,
        occurred_at: string;
    };
    id!: string;
    title!: string;
    description!: string;
    occurred_at!: string;
    updated_at!: string;
    address!: string;
    media!: { image_url: string, image_url_thumb: string };
    image_url!: string;
    image_url_thumb!: string;
    lat! : string;
    lng! : string;
}