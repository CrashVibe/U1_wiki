// https://vitepress.dev/guide/custom-theme
import { onMounted, watch, nextTick } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "@nolebase/vitepress-plugin-enhanced-mark/client/style.css";
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";
import vitepressNprogress from "vitepress-plugin-nprogress";
import "vitepress-plugin-nprogress/lib/css/index.css";
import "@nolebase/vitepress-plugin-enhanced-mark/client/style.css";
import MyLayout from "./components/MyLayout.vue";
import AgeCalculator from "./components/AgeCalculator.vue";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";
import type { Options } from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import { InjectionKey } from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import { NolebaseInlineLinkPreviewPlugin } from "@nolebase/vitepress-plugin-inline-link-preview/client";
import "@nolebase/vitepress-plugin-inline-link-preview/client/style.css";

import "@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css";

import { NolebaseUnlazyImg } from "@nolebase/vitepress-plugin-thumbnail-hash/client";
import "@nolebase/vitepress-plugin-thumbnail-hash/client/style.css";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("NolebaseUnlazyImg", NolebaseUnlazyImg);
    ctx.app.provide(InjectionKey, {
      layoutSwitch: {
        defaultMode: 1,
      },
      spotlight: {
        defaultToggle: true,
      },
    } as Options);
    vitepressNprogress(ctx);
    ctx.app.use(NolebaseInlineLinkPreviewPlugin);
    ctx.app.component("AgeCalculator", AgeCalculator);
  },
  Layout: MyLayout,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
} satisfies Theme;
