<script>
  // These props will come from your markdown frontmatter
  export let title;
</script>

<article class="prose prose-slate max-w-3xl mx-auto px-4 py-8">
  <h1>{title}</h1>
  
  <slot />
</article> 