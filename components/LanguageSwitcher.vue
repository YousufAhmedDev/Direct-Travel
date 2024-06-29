<template>
  <v-container>
    <v-select
      :items="localeOptions"
      v-model="selectedLocale"
      @update:modelValue="changeLocale"
      item-title="name"
      item-value="code"
      :label="$t('labels.language')"
      rounded
      variant="solo"
    />
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from '#imports';

const { locale, locales, setLocale } = useI18n();
const route = useRoute();
const router = useRouter();

const selectedLocale = ref(locale.value);

const localeOptions = locales.value.map(lang => ({
  code: lang.code,
  name: lang.name,
}));

const changeLocale = async newLocale => {
  if (newLocale !== locale.value) {
    await setLocale(newLocale);
    router.push({ path: route.fullPath, query: { ...route.query, locale: newLocale } });
  }
};

onMounted(() => {
  const routeLocale = route.query.locale || locale.value;
  selectedLocale.value = routeLocale;
  setLocale(routeLocale);
});
</script>
