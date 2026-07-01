import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Custom hook for Google Analytics tracking
 * Tracks page views and navigation events
 */
export function useAnalytics() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Check if gtag is available
    if (typeof window === "undefined" || !window.gtag) {
      return;
    }

    // Track initial page view
    const pagePath = location.pathname + location.search;
    window.gtag("config", import.meta.env.VITE_GA_ID || "", {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });

    // Track navigation type (PAGE_LOAD, PUSH, REPLACE, POP)
    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      window.gtag("event", "page_view", {
        page_path: pagePath,
        page_location: window.location.href,
        page_title: document.title,
        navigation_type: navigationType,
      });
    }
  }, [location, navigationType]);

  /**
   * Track a custom event
   * @param eventName - The name of the event to track
   * @param eventData - Additional event data
   */
  const trackEvent = (eventName: string, eventData: Record<string, any> = {}) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventData);
    }
  };

  /**
   * Track a button click
   * @param buttonName - The name or identifier of the button
   */
  const trackButtonClick = (buttonName: string) => {
    trackEvent("button_click", { button_name: buttonName });
  };

  /**
   * Track a link click
   * @param linkName - The name or identifier of the link
   * @param url - The URL being navigated to
   */
  const trackLinkClick = (linkName: string, url: string) => {
    trackEvent("link_click", { link_name: linkName, url });
  };

  /**
   * Track a social share
   * @param platform - The social platform (twitter, facebook, linkedin, etc.)
   * @param content - The content being shared
   */
  const trackSocialShare = (platform: string, content: string) => {
    trackEvent("social_share", { platform, content });
  };

  /**
   * Track a download
   * @param fileName - The name of the file being downloaded
   * @param fileType - The type of file (pdf, docx, etc.)
   */
  const trackDownload = (fileName: string, fileType: string) => {
    trackEvent("download", { file_name: fileName, file_type: fileType });
  };

  /**
   * Track a theme change
   * @param theme - The theme being switched to (dark, light, system)
   */
  const trackThemeChange = (theme: string) => {
    trackEvent("theme_change", { theme });
  };

  /**
   * Track a language change
   * @param language - The language being switched to (en, fr, etc.)
   */
  const trackLanguageChange = (language: string) => {
    trackEvent("language_change", { language });
  };

  /**
   * Track a section view (for single-page portfolio)
   * @param section - The section being viewed (home, about, skills, etc.)
   */
  const trackSectionView = (section: string) => {
    trackEvent("section_view", { section });
  };

  return {
    trackEvent,
    trackButtonClick,
    trackLinkClick,
    trackSocialShare,
    trackDownload,
    trackThemeChange,
    trackLanguageChange,
    trackSectionView,
  };
}

/**
 * Initialize Google Analytics script
 * Should be called in the main entry file
 */
export function initAnalytics() {
  if (typeof window === "undefined") {
    return;
  }

  const gaId = import.meta.env.VITE_GA_ID;
  
  if (!gaId) {
    console.warn("Google Analytics ID not configured. Set VITE_GA_ID in your environment.");
    return;
  }

  // Check if gtag already exists
  if (window.gtag) {
    return;
  }

  // Create and inject the gtag script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.gtag = function () {
    window.gtag.q = window.gtag.q || [];
    window.gtag.q.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", gaId, {
    send_page_view: false, // We handle page views manually
  });
}
