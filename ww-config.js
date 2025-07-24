export default {
  editor: {
    label: {
      en: "Custom Gig Card",  // Nom du composant dans WeWeb
    },
  },
  properties: {
    imageUrl: {
      label: { en: "Image URL" },
      type: "Text",
      bindable: true,
    },
    category: {
      label: { en: "Category" },
      type: "Text",
      bindable: true,
    },
    title: {
      label: { en: "Title" },
      type: "Text",
      bindable: true,
    },
    description: {
      label: { en: "Description" },
      type: "Text",
      bindable: true,
    },
    price: {
      label: { en: "Price" },
      type: "Text",
      bindable: true,
    },
    deliveryTime: {
      label: { en: "Delivery Time (h)" },
      type: "Text",
      bindable: true,
    },
    ratingValue: {
      label: { en: "Rating Value" },
      type: "Text",
      bindable: true,
    },
    reviewsCount: {
      label: { en: "Reviews Count" },
      type: "Text",
      bindable: true,
    },
    gigLink: {
      label: { en: "Link to Gig" },
      type: "Link",
      bindable: true,
    },
  },
};
