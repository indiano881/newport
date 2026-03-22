<script setup lang="ts">
import CertificationsC from './CertificationsC.vue'
</script>

<template>
  <section class="max-w-4xl mx-auto px-6 py-4 text-gray-800 dark:text-white">
    <h1 class="text-5xl font-bold mb-8 text-center text-black">About Me</h1>
    <div class="flex justify-center my-4">
      <NuxtImg
        src="/davide1.png"
        alt="Davide Baldi"
        loading="lazy"
        class="rounded-full w-36 h-36 object-cover object-[0%_0%] shadow-lg transition-transform duration-300 ease-in-out hover:scale-125"
      />
    </div>
    <p class="mb-6 text-lg leading-relaxed text-black">
      Hi, I'm <strong>Davide Baldi</strong> - a
      <strong>Analytics & Data Platform Engineer</strong> based in
      Stockholm, Sweden. I work across the entire stack: from building
      responsive web platforms with modern JavaScript frameworks, to designing
      cloud infrastructure, data pipelines, and DevOps automation on GCP and
      AWS.
    </p>

    <p class="mb-6 text-lg leading-relaxed text-black">
      Before moving into tech, I spent several years in the restaurant industry
      - a high-pressure environment that taught me how to stay calm under
      deadlines, lead teams, and solve problems on the fly. In 2022 I made a
      deliberate career switch into software engineering, and that background
      gives me an edge: I ramp up fast, communicate clearly with non-technical
      stakeholders, and bring a service-oriented mindset to every team I join.
    </p>
    <div class="flex justify-center my-4 text-black">
      <NuxtImg
        src="/projects/davide.jpg"
        alt="Davide Baldi"
        loading="lazy"
        class="rounded-full w-36 h-36 object-cover object-[0%_0%] shadow-lg transition-transform duration-300 ease-in-out hover:scale-125"
      />
    </div>

    <h2 class="text-2xl font-semibold mt-12 mb-4 text-black">What I Do</h2>

    <ul class="list-disc list-inside space-y-2 mb-6 text-lg text-black">
      <li>
        <strong>Frontend & Fullstack:</strong> JavaScript, TypeScript, Vue,
        Nuxt, React, Next.js, Node.js, Express
      </li>
      <li>
        <strong>Cloud Platforms:</strong> GCP (BigQuery, Dataflow, Pub/Sub,
        Cloud Functions, Cloud Run), AWS (S3, Lambda, RDS, IAM, API Gateway)
      </li>
      <li>
        <strong>Data & Analytics:</strong> SQL, BigQuery, Dataflow, ETL
        pipelines, data modeling
      </li>
      <li>
        <strong>DevOps & Automation:</strong> Docker, Kubernetes, Terraform,
        GitHub Actions, CI/CD pipelines
      </li>
      <li>
        <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, DynamoDB,
        Supabase
      </li>
    </ul>
    <CertificationsC />

    <h2 class="text-2xl font-semibold mt-12 mb-4 text-black">How I Work</h2>

    <p class="mb-6 text-lg leading-relaxed text-black">
      I approach every project with an architecture-first mindset - defining
      clear boundaries between services, choosing the right data layer for the
      workload, and building with observability from day one. I value clean
      abstractions, automated testing, and shipping iteratively. I'm also
      co-founder of <strong>Bonsai</strong>, a hackathon team that consistently
      places in competitions - building high-impact prototypes under pressure.
      When I join a team, I look for opportunities to mentor junior developers,
      improve documentation, and reduce friction in the development workflow.
    </p>

    <p class="mb-6 text-lg leading-relaxed text-black">
      I'm looking for senior engineering roles where I can own systems
      end-to-end, contribute to architectural decisions, and help grow the
      engineers around me.
    </p>
  </section>
</template>
