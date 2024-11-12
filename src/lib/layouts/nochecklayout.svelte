<script>
  export let title;
</script>

<div class="container mx-auto px-4">
  <article class="prose prose-slate max-w-3xl mx-auto py-8">
    <h1>{title}</h1>
    
    <slot />
  </article> 

</div> 