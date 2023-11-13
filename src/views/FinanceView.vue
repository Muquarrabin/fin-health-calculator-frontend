<script setup>
const items = [
  {
    name: 'African Elephant',
    species: 'Loxodonta africana',
    diet: 'Herbivore',
    habitat: 'Savanna, Forests',
  },
  // ... more items
]
</script>

<template>
  <section class="py-20 px-6 sm:px-8 lg:px-12">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 md:pr-8 mb-10 md:mb-0">
        <div class="max-w-7xl mx-auto">
          <div class="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Last Data</h2>
            </div>

            <div class=" sm:mx-auto sm:w-full sm:max-w-sm">
              <v-data-table :items="items"></v-data-table>
            </div>
          </div>

        </div>
      </div>
      <div class="md:w-1/2 md:pr-8 mb-10 md:mb-0">
        <div class="max-w-7xl mx-auto">
          <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Calculate Your
                Financial Health Score</h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label for="monthly_income" class="block text-sm font-medium leading-6 text-gray-900">Monthly Income</label>
                  <div class="mt-2">
                    <input id="monthly_income" name="monthly_income" type="text" required=""
                           class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
                <div>
                  <label for="monthly_expense" class="block text-sm font-medium leading-6 text-gray-900">Monthly Expense</label>
                  <div class="mt-2">
                    <input id="monthly_expense" name="monthly_expense" type="text" required=""
                           class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
                <div>
                  <label for="monthly_debt_payment" class="block text-sm font-medium leading-6 text-gray-900">Monthly Debt Payment</label>
                  <div class="mt-2">
                    <input id="monthly_debt_payment" name="monthly_debt_payment" type="text" required=""
                           class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
                <div>
                  <label for="total_debts" class="block text-sm font-medium leading-6 text-gray-900">Total Debts</label>
                  <div class="mt-2">
                    <input id="total_debts" name="total_debts" type="text" required=""
                           class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
                <div>
                  <label for="total_assets" class="block text-sm font-medium leading-6 text-gray-900">Total Assets</label>
                  <div class="mt-2">
                    <input id="total_assets" name="total_assets" type="text" required=""
                           class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                  </div>
                </div>


                <div>
                  <button type="submit"
                          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Calculate
                  </button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>