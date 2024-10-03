import * as React from "react";

// CSS & SCSS
import "./assets/fonts/inter.css";
import "./assets/fonts/material.css";
import "./assets/fonts/icofont/icofont.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/styles.scss";

// JS & COMPONENTS
import "./i18n";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/Themes";
import { SidebarProvider } from "./context/Sidebar";
import { LoaderProvider } from "./context/Preloader";
import { TranslatorProvider } from "./context/Translator";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, RegisterPage, ForgotPasswordPage } from "./pages/auth";
import {
  OverviewPage,
  DocumentationPage,
  ChangeLogPage,
  ErrorPage,
} from "./pages/others";
import {
  AvatarPage,
  AlertPage,
  ButtonPage,
  ChartPage,
  TablePage,
  FieldPage,
  HeadingPage,
  ColorPage,
} from "./pages/ui";
import {
  EcommercePage,
  AnalyticsPage,
  CRMPage,
  UserListPage,
  UserProfilePage,
  MyAccountPage,
  ProductListPage,
  ProductViewPage,
  ProductUploadPage,
  InvoiceListPage,
  InvoiceDetailsPage,
  OrderListPage,
  MessagePage,
  NotificationPage,
  BlankPage,
  SettingsPage,
} from "./pages/main";
import HomeBanner from "./pages/main/HomeBanner";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./app/store";
import HomeSlider from "./pages/main/HomeSlider";
import AboutUs from "./pages/main/AboutUs";
import HowItWorks from "./pages/main/HowItWorks";
import WhyChooseUs from "./pages/main/WhyChooseUs";
import StunningQuality from "./pages/main/StunningQuality";
import Testimonial from "./pages/main/Testimonial";
import PricingPlan from "./pages/main/PricingPlan";
import News from "./pages/main/News";
import RemoveImage from "./pages/main/RemoveImage";
import Clients from "./pages/main/Clients";
import ClippingPath from "./pages/main/ClippingPathService/ClippingPath";
import ClippingPathHowItWorks from "./pages/main/ClippingPathService/ClippingPathHowItWorks";
import ClippingPathProjects from "./pages/main/ClippingPathService/ClippingPathProjects";
import ClippingPathPrice from "./pages/main/ClippingPathService/ClippingPathPrice";
import ClippingPathTestimonial from "./pages/main/ClippingPathService/ClippingPathTestimonial";
import BackgroundRemoval from "./pages/main/BackgroundRemovalService/BackgroundRemoval";
import BackgroundRemovalHowItWorks from "./pages/main/BackgroundRemovalService/BackgroundRemovalHowItWorks";
import BackgroundRemovalProjects from "./pages/main/BackgroundRemovalService/BackgroundRemovalProjects";
import BackgroundRemovalPrice from "./pages/main/BackgroundRemovalService/BackgroundRemovalPrice";
import BackgroundRemovalTestimonial from "./pages/main/BackgroundRemovalService/BackgroundRemovalTestimonial";
import ImageRetouching from "./pages/main/ImageRetouchingService/ImageRetouching";
import ImageRetouchingHowItWorks from "./pages/main/ImageRetouchingService/ImageRetouchingHowItWorks";
import ImageRetouchingProjects from "./pages/main/ImageRetouchingService/ImageRetouchingProjects";
import ImageRetouchingPrice from "./pages/main/ImageRetouchingService/ImageRetouchingPrice";
import ImageRetouchingTestimonial from "./pages/main/ImageRetouchingService/ImageRetouchingTestimonial";
import GhostMannequin from "./pages/main/GhostMannequinService/GhostMannequin";
import GhostMannequinHowItWorks from "./pages/main/GhostMannequinService/GhostMannequinHowItWorks";
import GhostMannequinProjects from "./pages/main/GhostMannequinService/GhostMannequinProjects";
import GhostMannequinPrice from "./pages/main/GhostMannequinService/GhostMannequinPrice";
import GhostMannequinTestimonial from "./pages/main/GhostMannequinService/GhostMannequinTestimonial";
import ImageMasking from "./pages/main/ImageMaskingService/ImageMasking";
import ImageMaskingHowItWorks from "./pages/main/ImageMaskingService/ImageMaskingHowItWorks";
import ImageMaskingProjects from "./pages/main/ImageMaskingService/ImageMaskingProjects";
import ImageMaskingPrice from "./pages/main/ImageMaskingService/ImageMaskingPrice";
import ImageMaskingTestimonial from "./pages/main/ImageMaskingService/ImageMaskingTestimonial";
import ShadowCreation from "./pages/main/ShadowCreationService/ShadowCreation";
import ShadowCreationHowItWorks from "./pages/main/ShadowCreationService/ShadowCreationHowItWorks";
import ShadowCreationProjects from "./pages/main/ShadowCreationService/ShadowCreationProjects";
import ShadowCreationPrice from "./pages/main/ShadowCreationService/ShadowCreationPrice";
import ShadowCreationTestimonial from "./pages/main/ShadowCreationService/ShadowCreationTestimonial";
import ColorCorrection from "./pages/main/ColorCorrectionService/ColorCorrection";
import ColorCorrectionHowItWorks from "./pages/main/ColorCorrectionService/ColorCorrectionHowItWorks";
import ColorCorrectionProjects from "./pages/main/ColorCorrectionService/ColorCorrectionProjects";
import ColorCorrectionPrice from "./pages/main/ColorCorrectionService/ColorCorrectionPrice";
import ColorCorrectionTestimonial from "./pages/main/ColorCorrectionService/ColorCorrectionTestimonial";
import ImageRestoration from "./pages/main/ImageRestorationService/ImageRestoration";
import ImageRestorationHowItWorks from "./pages/main/ImageRestorationService/ImageRestorationHowItWorks";
import ImageRestorationProjects from "./pages/main/ImageRestorationService/ImageRestorationProjects";
import ImageRestorationPrice from "./pages/main/ImageRestorationService/ImageRestorationPrice";
import ImageRestorationTestimonial from "./pages/main/ImageRestorationService/ImageRestorationTestimonial";
import ImageManipulation from "./pages/main/ImageManipulationService/ImageManipulation";
import ImageManipulationHowItWorks from "./pages/main/ImageManipulationService/ImageManipulationHowItWorks";
import ImageManipulationProjects from "./pages/main/ImageManipulationService/ImageManipulationProjects";
import ImageManipulationPrice from "./pages/main/ImageManipulationService/ImageManipulationPrice";
import ImageManipulationTestimonial from "./pages/main/ImageManipulationService/ImageManipulationTestimonial";
import Automotive from "./pages/main/AutomotiveService/Automotive";
import AutomotiveHowItWorks from "./pages/main/AutomotiveService/AutomotiveHowItWorks";
import AutomotiveProjects from "./pages/main/AutomotiveService/AutomotiveProjects";
import AutomotiveTestimonial from "./pages/main/AutomotiveService/AutomotiveTestimonial";
import ReflectionCreation from "./pages/main/ReflectionCreationService/ReflectionCreation";
import ReflectionCreationHowItWorks from "./pages/main/ReflectionCreationService/ReflectionCreationHowItWorks";
import ReflectionCreationProjects from "./pages/main/ReflectionCreationService/ReflectionCreationProjects";
import ReflectionCreationPrice from "./pages/main/ReflectionCreationService/ReflectionCreationPrice";
import ReflectionCreationTestimonial from "./pages/main/ReflectionCreationService/ReflectionCreationTestimonial";
import Vector from "./pages/main/VectorService/Vector";
import VectorHowItWorks from "./pages/main/VectorService/VectorHowItWorks";
import VectorProjects from "./pages/main/VectorService/VectorProjects";
import VectorTestimonial from "./pages/main/VectorService/VectorTestimonial";
import AutomotivePrice from "./pages/main/AutomotiveService/AutomotivePrice";


const router = createBrowserRouter([
  // MAIN PAGES
  { path: "/", element: <HomeBanner /> },
  { path: "/analytics", element: <AnalyticsPage /> },
  { path: "/crm", element: <CRMPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/home-banner", element: <HomeBanner /> },
  { path: "/home-slider", element: <HomeSlider /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/how-it-works", element: <HowItWorks /> },
  { path: "/why-choose-us", element: <WhyChooseUs /> },
  { path: "/stunning-quality", element: <StunningQuality /> },
  { path: "/testimonial", element: <Testimonial /> },
  { path: "/pricing-plan", element: <PricingPlan /> },
  { path: "/news", element: <News /> },
  { path: "/remove-image", element: <RemoveImage /> },
  { path: "/clients", element: <Clients /> },
  { path: "/clipping-path", element: <ClippingPath /> },
  { path: "/clipping-path-how-it-works", element: <ClippingPathHowItWorks /> },
  { path: "/clipping-path-projects", element: <ClippingPathProjects /> },
  { path: "/clipping-path-price", element: <ClippingPathPrice /> },
  { path: "/clipping-path-testimonial", element: <ClippingPathTestimonial /> },

  { path: "/background-removal", element: <BackgroundRemoval /> },
  { path: "/background-removal-how-it-works", element: <BackgroundRemovalHowItWorks /> },
  { path: "/background-removal-projects", element: <BackgroundRemovalProjects /> },
  { path: "/background-removal-price", element: <BackgroundRemovalPrice /> },
  { path: "/background-removal-testimonial", element: <BackgroundRemovalTestimonial /> },

  { path: "/image-retouching", element: <ImageRetouching /> },
  { path: "/image-retouching-how-it-works", element: <ImageRetouchingHowItWorks /> },
  { path: "/image-retouching-projects", element: <ImageRetouchingProjects /> },
  { path: "/image-retouching-price", element: <ImageRetouchingPrice /> },
  { path: "/image-retouching-testimonial", element: <ImageRetouchingTestimonial /> },

  { path: "/ghost-mannequin", element: <GhostMannequin /> },
  { path: "/ghost-mannequin-how-it-works", element: <GhostMannequinHowItWorks /> },
  { path: "/ghost-mannequin-projects", element: <GhostMannequinProjects /> },
  { path: "/ghost-mannequin-price", element: <GhostMannequinPrice /> },
  { path: "/ghost-mannequin-testimonial", element: <GhostMannequinTestimonial /> },

  { path: "/image-masking", element: <ImageMasking /> },
  { path: "/image-masking-how-it-works", element: <ImageMaskingHowItWorks /> },
  { path: "/image-masking-projects", element: <ImageMaskingProjects /> },
  { path: "/image-masking-price", element: <ImageMaskingPrice /> },
  { path: "/image-masking-testimonial", element: <ImageMaskingTestimonial /> },

  { path: "/shadow-creation", element: <ShadowCreation /> },
  { path: "/shadow-creation-how-it-works", element: <ShadowCreationHowItWorks /> },
  { path: "/shadow-creation-projects", element: <ShadowCreationProjects /> },
  { path: "/shadow-creation-price", element: <ShadowCreationPrice /> },
  { path: "/shadow-creation-testimonial", element: <ShadowCreationTestimonial /> },

  { path: "/color-correction", element: <ColorCorrection /> },
  { path: "/color-correction-how-it-works", element: <ColorCorrectionHowItWorks /> },
  { path: "/color-correction-projects", element: <ColorCorrectionProjects /> },
  { path: "/color-correction-price", element: <ColorCorrectionPrice /> },
  { path: "/color-correction-testimonial", element: <ColorCorrectionTestimonial /> },

  { path: "/image-restoration", element: <ImageRestoration /> },
  { path: "/image-restoration-how-it-works", element: <ImageRestorationHowItWorks /> },
  { path: "/image-restoration-projects", element: <ImageRestorationProjects /> },
  { path: "/image-restoration-price", element: <ImageRestorationPrice /> },
  { path: "/image-restoration-testimonial", element: <ImageRestorationTestimonial /> },

  { path: "/image-manipulation", element: <ImageManipulation /> },
  { path: "/image-manipulation-how-it-works", element: <ImageManipulationHowItWorks /> },
  { path: "/image-manipulation-projects", element: <ImageManipulationProjects /> },
  { path: "/image-manipulation-price", element: <ImageManipulationPrice /> },
  { path: "/image-manipulation-testimonial", element: <ImageManipulationTestimonial /> },

  { path: "/automotive", element: <Automotive /> },
  { path: "/automotive-how-it-works", element: <AutomotiveHowItWorks /> },
  { path: "/automotive-projects", element: <AutomotiveProjects /> },
  { path: "/automotive-price", element: <AutomotivePrice /> },
  { path: "/automotive-testimonial", element: <AutomotiveTestimonial /> },

  { path: "/reflection-creation", element: <ReflectionCreation /> },
  { path: "/reflection-creation-how-it-works", element: <ReflectionCreationHowItWorks /> },
  { path: "/reflection-creation-projects", element: <ReflectionCreationProjects /> },
  { path: "/reflection-creation-price", element: <ReflectionCreationPrice /> },
  { path: "/reflection-creation-testimonial", element: <ReflectionCreationTestimonial /> },

  { path: "/vector", element: <Vector /> },
  { path: "/vector-how-it-works", element: <VectorHowItWorks /> },
  { path: "/vector-projects", element: <VectorProjects /> },
  { path: "/vector-price", element: <VectorProjects /> },
  { path: "/vector-testimonial", element: <VectorTestimonial /> },


  { path: "/my-account", element: <MyAccountPage /> },
  { path: "/product-list", element: <ProductListPage /> },
  { path: "/product-view", element: <ProductViewPage /> },
  { path: "/product-upload", element: <ProductUploadPage /> },
  { path: "/invoice-list", element: <InvoiceListPage /> },
  { path: "/invoice-details", element: <InvoiceDetailsPage /> },
  { path: "/order-list", element: <OrderListPage /> },
  { path: "/message", element: <MessagePage /> },
  { path: "/notification", element: <NotificationPage /> },
  { path: "/blank-page", element: <BlankPage /> },
  { path: "/settings", element: <SettingsPage /> },

  // UI PAGES
  { path: "/avatars", element: <AvatarPage /> },
  { path: "/alerts", element: <AlertPage /> },
  { path: "/buttons", element: <ButtonPage /> },
  { path: "/charts", element: <ChartPage /> },
  { path: "/tables", element: <TablePage /> },
  { path: "/fields", element: <FieldPage /> },
  { path: "/headings", element: <HeadingPage /> },
  { path: "/colors", element: <ColorPage /> },

  // OTHER PAGES
  // { path: "/", element: <OverviewPage /> },
  { path: "/documentation", element: <DocumentationPage /> },
  { path: "/changelog", element: <ChangeLogPage /> },
  { path: "/error", element: <ErrorPage /> },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <LoaderProvider>
        <TranslatorProvider>
          <SidebarProvider>
            <RouterProvider router={router} />
            <Toaster />
          </SidebarProvider>
        </TranslatorProvider>
      </LoaderProvider>
    </ThemeProvider>
  </Provider>
);
