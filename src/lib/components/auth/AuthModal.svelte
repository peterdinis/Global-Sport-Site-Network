<script lang="ts">
  import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "$lib/components/ui/dialog";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Button } from "$lib/components/ui/button";
  import { Tabs, TabsList, TabsTrigger, TabsContent } from "$lib/components/ui/tabs";
  import { createEventDispatcher } from "svelte";

  let email = "";
  let password = "";
  let name = "";

  const dispatch = createEventDispatcher();

  function handleLogin() {
    console.log("Login:", { email, password });
    dispatch("login", { email, password });
  }

  function handleRegister() {
    console.log("Register:", { name, email, password });
    dispatch("register", { name, email, password });
  }
</script>

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Prihlásiť sa / Registrovať</Button>
  </DialogTrigger>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Vitaj späť!</DialogTitle>
    </DialogHeader>

    <Tabs defaultValue="login" class="w-full">
      <TabsList class="grid grid-cols-2 mb-4">
        <TabsTrigger value="login">Prihlásenie</TabsTrigger>
        <TabsTrigger value="register">Registrácia</TabsTrigger>
      </TabsList>

      <!-- LOGIN -->
      <TabsContent value="login" class="space-y-4">
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" bind:value={email} placeholder="tvoj@email.com" />
        </div>
        <div class="space-y-2">
          <Label for="password">Heslo</Label>
          <Input id="password" type="password" bind:value={password} placeholder="••••••••" />
        </div>
        <Button class="w-full mt-4">Prihlásiť sa</Button>
      </TabsContent>

      <!-- REGISTER -->
      <TabsContent value="register" class="space-y-4">
        <div class="space-y-2">
          <Label for="name">Meno</Label>
          <Input id="name" type="text" bind:value={name} placeholder="Tvoje meno" />
        </div>
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" bind:value={email} placeholder="tvoj@email.com" />
        </div>
        <div class="space-y-2">
          <Label for="password">Heslo</Label>
          <Input id="password" type="password" bind:value={password} placeholder="••••••••" />
        </div>
        <Button class="w-full mt-4">Registrovať sa</Button>
      </TabsContent>
    </Tabs>
  </DialogContent>
</Dialog>
