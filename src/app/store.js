// import cartSlice from "@/Redux-Thunk/reducers/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { homeBannerApi } from "../features/homeBanner/homeBanner";
import { homeSliderApi } from "../features/homeSlider/homeSlider";
import { aboutUsApi } from "../features/aboutUs/aboutUs";
import { howItWorksApi } from "../features/howItWorks/howItWorks";
import { whyChooseUsApi } from "../features/whyChooseUs/whyChooseUs";
import { stunningQualityApi } from "../features/stunningQuality/stunningQuality";
import { testimonialApi } from "../features/testimonial/testimonial";
import { pricingPlanApi } from "../features/pricingPlan/pricingPlan";
import { newsApi } from "../features/news/news";
import { removeImageApi } from "../features/removeImage/removeImage";
import { clientsApi } from "../features/clients/clients";
import { clippingPathApi } from "../features/ClippingPathService/clippingPath/clippingPath";
import { clippingPathHowItWorksApi } from "../features/ClippingPathService/clippingPathHowItWorks/clippingPathHowItWorks";
import { clippingPathPriceApi } from "../features/ClippingPathService/clippingPathPrice/clippingPathPrice";
import { clippingPathProjectsApi } from "../features/ClippingPathService/clippingPathProjects/clippingPathProjects";
import { ClippingPathTestimonialApi } from "../features/ClippingPathService/clippingPathTestimonial/clippingPathTestimonial";
import { BackgroundRemovalApi } from "../features/BackgroundRemovalService/backgroundRemoval/backgroundRemoval";
import { BackgroundRemovalHowItWorksApi } from "../features/BackgroundRemovalService/backgroundRemovalHowItWorks/backgroundRemovalHowItWorks";
import { BackgroundRemovalPriceApi } from "../features/BackgroundRemovalService/backgroundRemovalPrice/backgroundRemovalPrice";
import { BackgroundRemovalTestimonialApi } from "../features/BackgroundRemovalService/backgroundRemovalTestimonial/backgroundRemovalTestimonial";
import { automotiveApi } from "../features/AutomotiveService/automotive/automotive";
import { automotiveHowItWorksApi } from "../features/AutomotiveService/automotiveHowItWorks/automotiveHowItWorks";
import { AutomotiveProjectsApi } from "../features/AutomotiveService/automotiveProjects/automotiveProjects";
import { automotivePriceApi } from "../features/AutomotiveService/automotivePrice/automotivePrice";
import { AutomotiveTestimonialApi } from "../features/AutomotiveService/automotiveTestimonial/automotiveTestimonial";
import { ColorCorrectionApi } from "../features/ColorCorrectionService/colorCorrection/colorCorrection";
import { colorCorrectionHowItWorksApi } from "../features/ColorCorrectionService/colorCorrectionHowItWorks/colorCorrectionHowItWorks";
import { colorCorrectionProjectsApi } from "../features/ColorCorrectionService/colorCorrectionProjects/colorCorrectionProjects";
import { colorCorrectionPriceApi } from "../features/ColorCorrectionService/colorCorrectionPrice/colorCorrectionPrice";
import { ghostMannequinApi } from "../features/GhostMannequinService/ghostMannequin/ghostMannequin";
import { ghostMannequinHowItWorksApi } from "../features/GhostMannequinService/ghostMannequinHowItWorks/ghostMannequinHowItWorks";
import { ghostMannequinPriceApi } from "../features/GhostMannequinService/ghostMannequinPrice/ghostMannequinPrice";
import { ghostMannequinProjectsApi } from "../features/GhostMannequinService/ghostMannequinProjects/ghostMannequinProjects";
import { ghostMannequinTestimonialApi } from "../features/GhostMannequinService/ghostMannequinTestimonial/ghostMannequinTestimonial";
import { colorCorrectionTestimonialApi } from "../features/ColorCorrectionService/colorCorrectionTestimonial/colorCorrectionTestimonial";
import { imageManipulationApi } from "../features/ImageManipulationService/imageManipulation/imageManipulation";
import { imageManipulationHowItWorksApi } from "../features/ImageManipulationService/imageManipulationHowItWorks/imageManipulationHowItWorks";
import { imageManipulationPriceApi } from "../features/ImageManipulationService/imageManipulationPrice/imageManipulationPrice";
import { imageManipulationProjectsApi } from "../features/ImageManipulationService/imageManipulationProjects/imageManipulationProjects";
import { imageManipulationTestimonialApi } from "../features/ImageManipulationService/imageManipulationTestimonial/imageManipulationTestimonial";
import { imageMaskingApi } from "../features/ImageMaskingService/imageMasking/imageMasking";
import { imageMaskingHowItWorksApi } from "../features/ImageMaskingService/imageMaskingHowItWorks/imageMaskingHowItWorks";
import { imageMaskingPriceApi } from "../features/ImageMaskingService/imageMaskingPrice/clippingPathPrice";
import { imageMaskingTestimonialApi } from "../features/ImageMaskingService/imageMaskingTestimonial/imageMaskingTestimonial";
import { imageRestorationApi } from "../features/ImageRestorationService/imageRestoration/imageRestoration";
import { imageRestorationHowItWorksApi } from "../features/ImageRestorationService/imageRestorationHowItWorks/imageRestorationHowItWorks";
import { imageRestorationPriceApi } from "../features/ImageRestorationService/imageRestorationPrice/imageRestorationPrice";
import { imageRestorationProjectsApi } from "../features/ImageRestorationService/imageRestorationProjects/clippingPathProjects";
import { imageRestorationTestimonialApi } from "../features/ImageRestorationService/imageRestorationTestimonial/imageRestorationTestimonial";
import { imageRetouchingApi } from "../features/ImageRetouchingService/imageRetouching/imageRetouching";
import { imageRetouchingHowItWorksApi } from "../features/ImageRetouchingService/imageRetouchingHowItWorks/imageRetouchingHowItWorks";
import { imageRetouchingPriceApi } from "../features/ImageRetouchingService/imageRetouchingPrice/imageRetouchingPrice";
import { imageRetouchingProjectsApi } from "../features/ImageRetouchingService/imageRetouchingProjects/imageRetouchingProjects";
import { imageRetouchingTestimonialApi } from "../features/ImageRetouchingService/imageRetouchingTestimonial/imageRetouchingTestimonial";
import { reflectionCreationApi } from "../features/ReflectionCreationService/reflectionCreation/reflectionCreation";
import { reflectionCreationHowItWorksApi } from "../features/ReflectionCreationService/reflectionCreationHowItWorks/reflectionCreationHowItWorks";
import { reflectionCreationPriceApi } from "../features/ReflectionCreationService/reflectionCreationPrice/reflectionCreationPrice";
import { reflectionCreationProjectsApi } from "../features/ReflectionCreationService/reflectionCreationProjects/reflectionCreationProjects";
import { reflectionCreationTestimonialApi } from "../features/ReflectionCreationService/reflectionCreationTestimonial/reflectionCreationTestimonial";
import { shadowCreationApi } from "../features/ShadowCreation/shadowCreation/shadowCreation";
import { shadowCreationHowItWorksApi } from "../features/ShadowCreation/shadowCreationHowItWorks/shadowCreationHowItWorks";
import { shadowCreationPriceApi } from "../features/ShadowCreation/shadowCreationPrice/shadowCreationPrice";
import { shadowCreationProjectsApi } from "../features/ShadowCreation/shadowCreationProjects/shadowCreationProjects";
import { shadowCreationTestimonialApi } from "../features/ShadowCreation/shadowCreationTestimonial/shadowCreationTestimonial";
import { vectorApi } from "../features/VectorService/vector/vector";
import { vectorHowItWorksApi } from "../features/VectorService/vectorHowItWorks/vectorHowItWorks";
import { vectorPriceApi } from "../features/VectorService/vectorPrice/vectorPrice";
import { vectorProjectsApi } from "../features/VectorService/vectorProjects/vectorProjects";
import { vectorTestimonialApi } from "../features/VectorService/vectorTestimonial/vectorTestimonial";
import { BackgroundRemovalProjectsApi } from "../features/BackgroundRemovalService/backgroundRemovalProjects/backgroundRemovalProjects";
import { imageMaskingProjectsApi } from "../features/ImageMaskingService/imageMaskingProjects/imageMaskingProjects";




const store = configureStore({
  reducer: {
    [homeBannerApi.reducerPath]: homeBannerApi.reducer,
    [homeSliderApi.reducerPath]: homeSliderApi.reducer,
    [aboutUsApi.reducerPath]: aboutUsApi.reducer,
    [howItWorksApi.reducerPath]: howItWorksApi.reducer,
    [whyChooseUsApi.reducerPath]: whyChooseUsApi.reducer,
    [stunningQualityApi.reducerPath]: stunningQualityApi.reducer,
    [testimonialApi.reducerPath]: testimonialApi.reducer,
    [pricingPlanApi.reducerPath]: pricingPlanApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [removeImageApi.reducerPath]: removeImageApi.reducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
    [clippingPathApi.reducerPath]: clippingPathApi.reducer,
    [clippingPathHowItWorksApi.reducerPath]: clippingPathHowItWorksApi.reducer,
    [clippingPathPriceApi.reducerPath]: clippingPathPriceApi.reducer,
    [clippingPathProjectsApi.reducerPath]: clippingPathProjectsApi.reducer,
    [ClippingPathTestimonialApi.reducerPath]: ClippingPathTestimonialApi.reducer,

    [BackgroundRemovalApi.reducerPath]: BackgroundRemovalApi.reducer,
    [BackgroundRemovalHowItWorksApi.reducerPath]: BackgroundRemovalApi.reducer,
    [BackgroundRemovalProjectsApi.reducerPath]: BackgroundRemovalApi.reducer,
    [BackgroundRemovalPriceApi.reducerPath]: BackgroundRemovalApi.reducer,
    [BackgroundRemovalTestimonialApi.reducerPath]: BackgroundRemovalApi.reducer,

    [automotiveApi.reducerPath]: automotiveApi.reducer,
    [automotiveHowItWorksApi.reducerPath]: BackgroundRemovalApi.reducer,
    [AutomotiveProjectsApi.reducerPath]: BackgroundRemovalApi.reducer,
    [automotivePriceApi.reducerPath]: automotivePriceApi.reducer,
    [AutomotiveTestimonialApi.reducerPath]: AutomotiveTestimonialApi.reducer,
    
    [ColorCorrectionApi.reducerPath]: automotiveApi.reducer,
    [colorCorrectionHowItWorksApi.reducerPath]: BackgroundRemovalApi.reducer,
    [colorCorrectionProjectsApi.reducerPath]: BackgroundRemovalApi.reducer,
    [colorCorrectionPriceApi.reducerPath]: automotivePriceApi.reducer,
    [colorCorrectionTestimonialApi.reducerPath]: AutomotiveTestimonialApi.reducer,

    [ghostMannequinApi.reducerPath]: ghostMannequinApi.reducer,
    [ghostMannequinHowItWorksApi.reducerPath]: ghostMannequinHowItWorksApi.reducer,
    [ghostMannequinPriceApi.reducerPath]: ghostMannequinPriceApi.reducer,
    [ghostMannequinProjectsApi.reducerPath]: ghostMannequinProjectsApi.reducer,
    [ghostMannequinTestimonialApi.reducerPath]: ghostMannequinTestimonialApi.reducer,

    [imageManipulationApi.reducerPath]: imageManipulationApi.reducer,
    [imageManipulationHowItWorksApi.reducerPath]: imageManipulationHowItWorksApi.reducer,
    [imageManipulationPriceApi.reducerPath]: imageManipulationPriceApi.reducer,
    [imageManipulationProjectsApi.reducerPath]: imageManipulationProjectsApi.reducer,
    [imageManipulationTestimonialApi.reducerPath]: imageManipulationTestimonialApi.reducer,

    [imageRestorationApi.reducerPath]: imageRestorationApi.reducer,
    [imageRestorationHowItWorksApi.reducerPath]: imageRestorationHowItWorksApi.reducer,
    [imageRestorationPriceApi.reducerPath]: imageRestorationPriceApi.reducer,
    [imageRestorationProjectsApi.reducerPath]: imageRestorationProjectsApi.reducer,
    [imageRestorationTestimonialApi.reducerPath]: imageRestorationTestimonialApi.reducer,

    [imageRetouchingApi.reducerPath]: imageRetouchingApi.reducer,
    [imageRetouchingHowItWorksApi.reducerPath]: imageRetouchingHowItWorksApi.reducer,
    [imageRetouchingPriceApi.reducerPath]: imageRetouchingPriceApi.reducer,
    [imageRetouchingProjectsApi.reducerPath]: imageRetouchingProjectsApi.reducer,
    [imageRetouchingTestimonialApi.reducerPath]: imageRetouchingTestimonialApi.reducer,

    [reflectionCreationApi.reducerPath]: reflectionCreationApi.reducer,
    [reflectionCreationHowItWorksApi.reducerPath]: reflectionCreationHowItWorksApi.reducer,
    [reflectionCreationPriceApi.reducerPath]: reflectionCreationPriceApi.reducer,
    [reflectionCreationProjectsApi.reducerPath]: reflectionCreationProjectsApi.reducer,
    [reflectionCreationTestimonialApi.reducerPath]: reflectionCreationTestimonialApi.reducer,

    [shadowCreationApi.reducerPath]: shadowCreationApi.reducer,
    [shadowCreationHowItWorksApi.reducerPath]: shadowCreationHowItWorksApi.reducer,
    [shadowCreationPriceApi.reducerPath]: shadowCreationPriceApi.reducer,
    [shadowCreationProjectsApi.reducerPath]: shadowCreationProjectsApi.reducer,
    [shadowCreationTestimonialApi.reducerPath]: shadowCreationTestimonialApi.reducer,

    [vectorApi.reducerPath]: vectorApi.reducer,
    [vectorHowItWorksApi.reducerPath]: vectorHowItWorksApi.reducer,
    [vectorPriceApi.reducerPath]: vectorPriceApi.reducer,
    [vectorProjectsApi.reducerPath]: vectorProjectsApi.reducer,
    [vectorTestimonialApi.reducerPath]: vectorTestimonialApi.reducer,
  
 
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      homeBannerApi.middleware,
      homeSliderApi.middleware,
      aboutUsApi.middleware,
      howItWorksApi.middleware,
      whyChooseUsApi.middleware,
      stunningQualityApi.middleware,
      testimonialApi.middleware,
      pricingPlanApi.middleware,
      newsApi.middleware,
      removeImageApi.middleware,
      clientsApi.middleware,
      clippingPathApi.middleware,
      clippingPathHowItWorksApi.middleware,
      clippingPathPriceApi.middleware,
      clippingPathProjectsApi.middleware,
      ClippingPathTestimonialApi.middleware,
      BackgroundRemovalApi.middleware,
      BackgroundRemovalHowItWorksApi.middleware,
      BackgroundRemovalPriceApi.middleware,
      BackgroundRemovalProjectsApi.middleware,
      BackgroundRemovalTestimonialApi.middleware,
      automotiveApi.middleware,
      automotiveHowItWorksApi.middleware,
      automotivePriceApi.middleware,
      AutomotiveProjectsApi.middleware,
      AutomotiveTestimonialApi.middleware,
      ColorCorrectionApi.middleware,
      colorCorrectionHowItWorksApi.middleware,
      colorCorrectionPriceApi.middleware,
      colorCorrectionProjectsApi.middleware,
      colorCorrectionTestimonialApi.middleware,
      ghostMannequinApi.middleware,
      ghostMannequinHowItWorksApi.middleware,
      ghostMannequinPriceApi.middleware,
      ghostMannequinProjectsApi.middleware,
      ghostMannequinTestimonialApi.middleware,
      imageManipulationApi.middleware,
      imageManipulationHowItWorksApi.middleware,
      imageManipulationPriceApi.middleware,
      imageManipulationProjectsApi.middleware,
      imageManipulationTestimonialApi.middleware,

      imageMaskingApi.middleware,
      imageMaskingHowItWorksApi.middleware,
      imageMaskingPriceApi.middleware,
      imageMaskingProjectsApi.middleware,
      imageMaskingTestimonialApi.middleware,

      imageRestorationApi.middleware,
      imageRestorationHowItWorksApi.middleware,
      imageRestorationPriceApi.middleware,
      imageRestorationProjectsApi.middleware,
      imageRestorationTestimonialApi.middleware,

      imageRetouchingApi.middleware,
      imageRetouchingHowItWorksApi.middleware,
      imageRetouchingPriceApi.middleware,
      imageRetouchingProjectsApi.middleware,
      imageRetouchingTestimonialApi.middleware,

      reflectionCreationApi.middleware,
      reflectionCreationHowItWorksApi.middleware,
      reflectionCreationPriceApi.middleware,
      reflectionCreationProjectsApi.middleware,
      reflectionCreationTestimonialApi.middleware,

      shadowCreationApi.middleware,
      shadowCreationHowItWorksApi.middleware,
      shadowCreationPriceApi.middleware,
      shadowCreationProjectsApi.middleware,
      shadowCreationTestimonialApi.middleware,

      vectorApi.middleware,
      vectorHowItWorksApi.middleware,
      vectorPriceApi.middleware,
      vectorProjectsApi.middleware,
      vectorTestimonialApi.middleware,
      
    ),
});

export default store;
