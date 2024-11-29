<script>
  import BlogLayout from '$lib/layouts/BlogLayout.svelte';
  export let data;
</script>

<BlogLayout {data}>
  <slot />
</BlogLayout> 