import { createSignal, onMount, For } from "solid-js";

const Fridges = () => {
  const [fridges, setFridges] = createSignal([]);
  const [items, setItems] = createSignal([]);

  onMount(async () => {
    const res = await fetch(`/api/fridges`);
    setFridges(await res.json());
  });

  async function onClickFridge(id: string) {
    const res = await fetch(`/api/fridges/` + id);
    setItems(await res.json());
    setFridges([]);
  }

  async function onClickItem(fridgeId: string, itemId: string) {
    await fetch(`/api/fridges/` + fridgeId + "/" + itemId, {
      method: "DELETE",
    });
    const res = await fetch(`/api/fridges/` + fridgeId);
    setItems(await res.json());
  }

  return (
    <div class="ml-3 mt-5">
      <For each={fridges()}>
        {(fridge) => (
          <div class=" mb-3">
            <button
              onClick={async () => onClickFridge(fridge.fridgeId)}
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white text-2xl py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              {fridge.location}
            </button>
          </div>
        )}
      </For>

      <For each={items()}>
        {(item) => (
          <div class="flex items-start mb-3 border-2 p-2 mr-3">
            <p class="text-xl font-bold"> - {item.i_name}:</p>
            <p class="text-xl ml-3"><b>Q:</b> {item.cuantity}</p>
            <p class="text-xl ml-3"><b>D:</b> {item.drawer}</p>

            <button
              onClick={async () => onClickItem(item.fridgeId, item.itemId)}
              class=" ml-5 bg-red-600 hover:bg-red-400 text-white text-l py-1 px-2 rounded inline-flex items-center"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </button>
          </div>
        )}
      </For>
    </div>
  );
};

export default Fridges;
