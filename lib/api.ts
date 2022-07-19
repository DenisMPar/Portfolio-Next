import { contentfulClient } from "./contentful";

export async function getCmsContent() {
  try {
    const res = await contentfulClient.getEntries();

    const data = res.items.map((item: any) => {
      return item.fields;
    });

    return data;
  } catch (error) {
    return error;
  }
}
