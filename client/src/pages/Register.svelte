<script>
    export let params;
    let name = '', email = '', password = ''

    $: submit = async () => {
        // submit 
    }
</script>

<h1>Register</h1>
<main class="form-signin">
    <form on:submit|preventDefault={submit}>
        <h1 class="h1 mb-3 fw-normal">Register</h1>

        <div class="form-floating">
            <input bind:value={name} class="form-control" placeholder="Name">
            <label for="">Name</label>
        </div>

        <div class="form-floating">
            <input bind:value={email} type="email" class="form-control" placeholder="name@example.com">
            <label for="">Email address</label>
        </div>

        <div class="form-floating">
            <input bind:value={password} type="password" class="form-control" placeholder="Password">
        <label for="">Password</label>
        </div>

    <button class="w-100 btn btn-Lg btn-primary" type="submit">Submit</button>

    </form>
</main>

