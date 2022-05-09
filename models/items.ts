import config from '../config/config.json';
import Item from '../interfaces/order_item';

const items = {
    getItems: async function getItems(item: Partial<Item>) {
        try {
            const response = await fetch(`${config.base_url}/products?api_key=${config.api_key}`);
            const result = await response.json();

            return result.data;
        } catch (err) {
            console.log(err);
        }
    },
    updateItems: async function updateItems(item) {
        try {
            item.api_key = config.api_key;

            await fetch(`${config.base_url}/products`, {
                body: JSON.stringify(item),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'PUT'
            });
        } catch (err) {
            console.log("Could not update.")
        }
    },
};

export default items;