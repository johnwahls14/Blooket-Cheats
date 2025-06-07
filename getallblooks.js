

(async function hackBlooket() {
    const blooks = await fetch('https://api.blooket.com/api/users/me', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        }
    }).then(response => response.json());

    const blookIds = blooks.map(blook => blook.id);
    
    for (let id of blookIds) {
        await fetch(`https://api.blooket.com/api/users/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
            },
            body: JSON.stringify({
                blookId: id,
                amount: 10000
            })
        });
    }
})();
