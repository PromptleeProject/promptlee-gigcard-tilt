<template>
  <a ref='cardRef' :href="content.gigLink" class="gig-card">
    <img :src="content.imageUrl" class="gig-card-image" />

    <div class="gig-card-content">
      <span class="gig-card-category">{{ content.category }}</span>
      <h3 class="gig-card-title">{{ content.title }}</h3>
      <p class="gig-card-description">{{ content.description }}</p>

      <div class="gig-card-footer">
        <div class="gig-card-price-delivery">
          <span class="gig-card-price">${{ content.price }}</span>
          <span class="gig-card-delivery">{{ content.deliveryTime }}h</span>
        </div>

        <div class="gig-card-rating">
          <div class="gig-card-rating-main">
            <span class="gig-card-rating-value">{{ content.ratingValue }}</span>
            <span class="gig-card-rating-icon">⭐</span>
          </div>
          <span class="gig-card-reviews">({{ content.reviewsCount }} reviews)</span>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const cardRef = ref(null);

    onMounted(() => {
      if (cardRef.value) {
        VanillaTilt.init(cardRef.value, {
          max: 8,
          speed: 50,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });

    onBeforeUnmount(() => {
      if (cardRef.value?.vanillaTilt) {
        cardRef.value.vanillaTilt.destroy();
      }
    });

    return { cardRef };
  },
};
</script>


<style scoped>
.gig-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
}

.gig-card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.gig-card-content {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.gig-card-category {
  background-color: #ece0ff;
  color: #9f7aea;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 8px;
  align-self: flex-start;
}

.gig-card-title {
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin: 8px 0 4px;
}

.gig-card-description {
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: #555;
  margin-bottom: 16px;
}

.gig-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.gig-card-price-delivery,
.gig-card-rating {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.gig-card-price {
  font-family: Inter, sans-serif;
  color: #9f7aea;
  font-weight: 700;
}

.gig-card-delivery {
  font-family: Inter, sans-serif;
  color: #555;
  font-size: 12px;
}

.gig-card-rating-main {
  display: flex;
  align-items: center;
  gap: 4px;
}

.gig-card-rating-value {
  color: #ffb800;
  font-weight: 700;
}

.gig-card-rating-icon {
  font-size: 14px;
}

.gig-card-reviews {
  font-size: 12px;
  color: #777;
}
</style>
