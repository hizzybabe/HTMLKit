<script>
    export let prevHref;
    export let nextHref;
</script>

<div class="navigation-container">
    <a 
        href="/HTMLKit/html"
        class="chapter-btn back-btn"
    >
        Back to Chapters
    </a>

    <div class="nav-buttons">
        <a 
            href={prevHref}
            class="chapter-btn prev-btn"
        >
            Previous Chapter
        </a>
        <a 
            href={nextHref}
            class="chapter-btn next-btn"
        >
            Next Chapter
        </a>
    </div>
</div>

<style>
    .navigation-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 2px solid #e2e8f0;
    }

    .nav-buttons {
        display: flex;
        gap: 1rem;
    }

    .chapter-btn {
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        transition: all 0.3s ease;
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .back-btn {
        background-color: #3b82f6;
        color: white;
    }

    .back-btn:hover {
        background-color: #2563eb;
        transform: translateY(-2px);
    }

    .prev-btn {
        background-color: #6b7280;
        color: white;
    }

    .prev-btn:hover {
        background-color: #4b5563;
        transform: translateY(-2px);
    }

    .next-btn {
        background-color: #22c55e;
        color: white;
    }

    .next-btn:hover {
        background-color: #16a34a;
        transform: translateY(-2px);
    }
</style>
