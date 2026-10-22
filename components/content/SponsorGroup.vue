<script setup lang="ts">
import type { Sponsor } from '~/types'
import { badges } from '~/constants/badges'
import { sponsors } from '~/constants/sponsors'

const today = new Date()
const year = today.getFullYear()

// Fiscal year runs December 1 through November 30.
const fiscalStartYear = today.getMonth() === 11 ? year : year - 1
const fiscalYear = `${fiscalStartYear}–${fiscalStartYear + 1}`

type PageSponsor = Sponsor & { isPast?: boolean }

const currentSponsors = computed(() =>
  (sponsors as PageSponsor[]).filter(sponsor => !sponsor.isPast),
)

const pastSponsors = computed(() =>
  (sponsors as PageSponsor[]).filter(sponsor => sponsor.isPast),
)

function getSponsorBadges(sponsor: Sponsor) {
  return badges.filter(badge =>
    sponsor.badges.some(name => name === badge.name),
  )
}
</script>

<template>
  <main class="px-6 sm:px-10 pb-20">
    <section class="mb-12">
      <h1 class="text-3xl font-bold mb-4">
        Our Partners
      </h1>

      <p class="mb-8">
        Our partners support Edmonton’s developer community in different
        ways. These badges recognize the contributions each partner makes.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        <div
          v-for="(badge, index) in badges"
          :key="badge.name"
          class="flex items-center gap-4 lg:col-span-2"
          :class="{ 'lg:col-start-2': index === 3 }"
        >
          <Icon
            :name="badge.image"
            class="w-20 h-24 shrink-0"
            role="img"
            :aria-label="badge.name"
          />

          <div>
            <h2 class="font-bold">
              {{ badge.name }}
            </h2>

            <p class="text-sm">
              {{ badge.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold mb-8">
        {{ fiscalYear }} Sponsors
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="sponsor in currentSponsors"
          :key="sponsor.name"
          class="flex flex-col items-center gap-5 p-6 rounded-lg
                 shadow-lg dark:bg-neutral-900 border border-neutral-400/40"
        >
          <a
            v-if="sponsor.link"
            :href="sponsor.link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${sponsor.name} website`"
            class="flex items-center justify-center w-full rounded
                   focus-visible:outline focus-visible:outline-2"
          >
            <Icon
              :name="sponsor.image"
              class="w-64 max-w-full h-28"
              aria-hidden="true"
            />
          </a>

          <Icon
            v-else
            :name="sponsor.image"
            class="w-64 max-w-full h-28"
            role="img"
            :aria-label="sponsor.name"
          />

          <div class="flex flex-wrap justify-center gap-3">
            <Icon
              v-for="badge in getSponsorBadges(sponsor)"
              :key="badge.name"
              :name="badge.image"
              class="w-20 h-24"
              role="img"
              :aria-label="badge.name"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      v-if="pastSponsors.length"
      class="mt-16 pt-10 border-t border-neutral-400/40"
    >
      <h2 class="text-2xl font-bold mb-8">
        Past Sponsors
      </h2>

      <div class="flex flex-wrap items-center gap-6">
        <template
          v-for="sponsor in pastSponsors"
          :key="sponsor.name"
        >
          <a
            v-if="sponsor.link"
            :href="sponsor.link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${sponsor.name} website`"
            :title="sponsor.name"
            class="flex items-center justify-center rounded
                   focus-visible:outline focus-visible:outline-2"
          >
            <Icon
              :name="sponsor.image"
              class="w-24 h-12"
              aria-hidden="true"
            />
          </a>

          <Icon
            v-else
            :name="sponsor.image"
            class="w-24 h-12"
            role="img"
            :aria-label="sponsor.name"
          />
        </template>
      </div>
    </section>
  </main>
</template>