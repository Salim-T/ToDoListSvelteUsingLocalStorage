<script>
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";

    let lists = JSON.parse(localStorage.getItem("lists")) || [];

    let newList = "";

    //On initialise la variable modal à false pour qu'elle ne soit pas affichée au chargement de la page
    let modal = false;
    let showLists = true;

    function handleResize() {
        if (window.innerWidth > 1250) {
            showLists = true;
        } else {
            showLists = false;
        }
    }
    
    // detecte si la fenetre est redimensionnée
    window.addEventListener('resize', handleResize);


    function addToList() {
        if (newList === "") {
            alert("Please enter a todo item");
        } else {
            event.preventDefault();
            lists = [...lists, { id: lists.length + 1, name: newList }];
            newList = "";

            localStorage.setItem("lists", JSON.stringify(lists));
            modal = false;
        }
    }

    onMount(() => {
        const savedLists = localStorage.getItem("lists");
        if (savedLists) {
            lists = JSON.parse(savedLists);
        }
    });

    function removeFromList(index) {
        lists = lists.filter((_, i) => i !== index);
        localStorage.setItem("lists", JSON.stringify(lists));
        push(`/`);
    }

    function handleClick(listId) {
        // Change l'url pour afficher la liste
        push(`/list/${listId}`);
        setTimeout(() => {
            window.location.reload();
        }, 10);
    }
</script>

<button class="show-lists-icon" on:click={() => (showLists = !showLists)}>
    <img src="src\assets\list.svg" alt="List icon">
</button>
  
{#if showLists}
<div class="lists">
    <h1 class="title-list">Lists 🚀</h1>
    <div class="line" />
    <ul>
        {#each lists as list, i}
            <li>
                <a href="/#/list/{list.id}" on:click={() => handleClick(list.id)}>{list.name}</a>
                    <button on:click={() => removeFromList(i)}>
                        <img src="src\assets\close.svg" alt="">
                    </button>
            </li>
        {/each}

        <li>
            <!--Au clique sur le bouton la modal devient true-->
            <button class="button-add-list" on:click={() => (modal = !modal)}
                >+ New List</button
            >
        </li>
    </ul>
</div>
{/if}
<!--Si modal est true alors on affiche la modal-->
{#if modal}
    <div class="modal-container">
        <!--Au clique sur l'overlay la modal devient false et se ferme-->
        <div class="overlay" on:click={() => (modal = !modal)} />
        <div class="modal">
            <!-- Bouton pour fermer la modal -->
            <button class="close-modal" on:click={() => (modal = !modal)}>
                <img src="src\assets\close.svg" alt="" />
            </button>
            <h1>Add a list</h1>
            <div class="under-line" />
            <label for="name">Name</label>
            <input class="modal-input" type="text" bind:value={newList} />
            <button class="modal-btn-create-list" on:click={addToList}
                >Add</button
            >
        </div>
    </div>
{/if}


<style>
    .line {
        width: 200px;
        height: 1px;
        background-color: rgb(225, 224, 224);
        margin-bottom: 20px;
    }

    .lists {
        background-color: #fafafa;
        display: flex;
        flex-direction: column;
        height: 100%;
        left: 0;
        max-width: 310px;
        min-height: 370px;
        position: fixed;
        width: 100%;
        padding-top: 54px;
        padding-left: 20px;
        z-index: 999;
    }

    .title-list {
        font-size: 16px;
        margin: 0 0 5px 15px;
        color: rgb(81, 80, 80);
        font-weight: bold;
    }

    .lists ul li {
        margin: 0 0 10px 15px;
        position: relative;
        display: flex;
        align-items: center;
    }

    /* Troncate */
    .lists ul li a {
        text-decoration: none;
        color: rgb(81, 80, 80);
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 210px;
    }

    .lists ul li button {
        background-color: transparent;
        border: none;
        color: rgb(81, 80, 80);
        font-size: 18px;
        cursor: pointer;
    }

    .lists ul li button img{
        width: 9px;
        height: 9px;
        position: absolute;
        left: 80%;
    }

    .lists ul li .button-add-list {
        margin-top: 20px;
        color: #219af2;
        border: none;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        background: none;
        cursor: pointer;
        text-decoration: none;
    }

    .button-add-list:hover {
        text-decoration: underline;
    }

    .modal-btn {
        background-color: #3d7fe2;
        color: white;
        border: none;
        border-radius: 5px;
        min-width: 150px;
        padding: 10px 14px;
        margin: 50px 20px;
        cursor: pointer;
    }

    .modal-btn:hover {
        background-color: #1567e2;
    }

    .modal-container {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index:999;
    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.25);
    }

    .modal {
        width: 95%;
        max-width: 473.25px;
        min-width: 300px;
        height: 207px;
        background-color: white;
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        overflow: auto;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
        padding: 10px 15px 30px;
        z-index: 9999;
    }

    .modal h1 {
        margin-bottom: 10px;
        font-size: 16px;
        font-weight: bold;
    }

    .modal label {
        font-size: 14px;
        font-weight: 700;
    }

    .under-line {
        width: 100%;
        height: 1px;
        background-color: rgba(221, 221, 221, 0.7);
        margin-bottom: 10px;
    }

    .close-modal {
        position: absolute;
        top: 10px;
        right: 15px;
        border: none;
        background-color: white;
        cursor: pointer;
    }

    .modal-input {
        width: 100%;
        padding: 5px 10px;
        border: 1px solid #dddddd;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 40px;
    }

    .modal-input:focus {
        outline: none !important;
        border-color: #719ece;
        /* border: 0 0 10px #DDDDDD; */
    }

    .modal-input-button {
        border: 1px solid #ccc;
        border-radius: 5px;
        color: grey;
        width: 19%;
        min-width: 80px;
        padding: 5px 5px;
        cursor: pointer;
    }

    .modal-input-subtask {
        margin-left: 20px;
        width: 70%;
        padding: 5px 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .modal-input-button-subtask {
        border: 1px solid #ccc;
        border-radius: 5px;
        color: grey;
        width: 19%;
        min-width: 80px;
        padding: 5px 3px;
        cursor: pointer;
    }

    .modal-input-button-close-subtask {
        border: 1px solid #ccc;
        border-radius: 5px;
        color: grey;
        width: 3%;
        padding: 5px 3px;
        cursor: pointer;
    }

    .modal ul {
        margin: 10px 0 20px;
    }

    .modal ul li {
        margin-top: 3px;
    }

    .modal-btn-create-list {
        background-color: #219af2;
        color: white;
        border: none;
        border-radius: 5px;
        display: block;
        position: absolute;
        bottom: 10px;
        right: 15px;
        min-width: 80px;
        padding: 5px 14px;
        cursor: pointer;
    }

    .modal-btn-create-list:hover {
        background-color: #1567e2;
    }

    .checked {
        text-decoration: line-through;
    }

    .liste-subtask {
        margin-left: 30px;
    }
    .show-lists-icon {
        display: none;
    }

    .show-lists-icon img {
        width: 30px; 
        height: auto; 
    }


    @media (max-width: 1249px) {
        .show-lists-icon {
            display: block;
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 999;
            border: none;
            background-color: transparent;
            cursor: pointer;

        }
    }

</style>
