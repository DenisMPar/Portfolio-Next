import * as contentful from "contentful";

const contentfulClient = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

export { contentfulClient };
