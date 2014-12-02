//Mod made by SG Miner
 
 
//Script Start//
 
function head(chat){
    try{
    clientMessage( "§6[SG-Miner] §f" + chat)
     
     
    }catch (err){
     
    clientMessage(ChatColor.WHITE + chat);
    }
 
 
}
var phoneId = 180;
var dcId = 502;
//Items
ModPE.setItem(502, "skull_wither", 0, "Diamond Charger");
ModPE.setItem(501, "blaze_powder", 0, "Torch Spawner")/
ModPE.setItem(500, "blaze_rod", 0, "lava spawner");
ModPE.setItem(180, "record_stal", 0, "Phone");
ModPE.setItem(182, "book_written", 0, "Warning");
//foods
 
ModPE.setFoodItem(181, "netherbrick", 0, 200, "Chocolate");
ModPE.setFoodItem(503, "gold_ingot", 0, 200, "Butter");
ModPE.setFoodItem(504, "brick", 0, 200, "Peanut Butter");
 
 
     //Craft Recipe
  Item.addCraftRecipe(180, 1, 2,[102, 1, 0, 331, 1, 0]); 
  Item.addCraftRecipe(181, 1, 0,[325, 1, 1, 127, 2, 0]);  
  Item.addCraftRecipe(502, 1, 0,[102, 3, 0, 325, 1, 0]);
  Item.addCraftRecipe(504, 16, 0,[127, 2, 0, 503, 1, 0]);
      
      
      
      
     //UseItem
      
function useItem(x, y, z, itemId, count, side){
if(itemId == phoneId){
ModPE.takeScreenshot(/sdcard0/);
head("Say CHEEEEEZE");
}
if(Player.getCarriedItem() == 182){
print("⚠WARNING DO NOT COPY MY MOD⚠");
print("KEEP CALM AND USE MY MOD");
}
if(Player.getCarriedItem() == 501){
 
preventDefault();
        Level.dropItem(x,y+5,z,0,50,10);
        Level.dropItem(x-1,y+5,z,0,50,5);
        Level.dropItem(x-1,y+5,z+1,0,50,5);
        Level.dropItem(x,y+5,z-1,0,50,5);
        Level.dropItem(x,y+5,z+1,0,50,5);
        Level.dropItem(x-1,y+5,z-1,0,50,5);
        Level.dropItem(x+1,y+5,z+1,0,50,5);
        Level.dropItem(x+1,y+5,z,0,50,5);
        Level.dropItem(x+1,y+5,z+1,0,50,100); 
}
if(itemId == dcId){
preventDefault();
        Level.dropItem(x,y+5,z,0,57,10);
        Level.dropItem(x-1,y+5,z,0,57,5);
        Level.dropItem(x-1,y+5,z+1,0,57,5);
        Level.dropItem(x,y+5,z-1,0,57,5);
        Level.dropItem(x,y+5,z+1,0,57,5);
        Level.dropItem(x-1,y+5,z-1,0,57,5);
        Level.dropItem(x+1,y+5,z+1,0,57,5);
        Level.dropItem(x+1,y+5,z,0,57,5);
        Level.dropItem(x+1,y+5,z+1,0,57,100); 
 
}
 
 
}
 
 
function procCmd(command){
 
var cmd = command.split(" ");
 
if(cmd[0] == "phone"){
addItemInventory(180, 1);
addItemInventory(182, 1);
head("You got a phone");
 
}
if(cmd[0] == "craft"){
addItemInventory(58, 1);
 
}
if(cmd[0] == "foods"){
addItemInventory(181, 5);
addItemInventory(502, 5);
addItemInventory(504, 16);
head("You have Foods!");
 
}
if(cmd[0] == "c"){
Level.setGameMode(1);
head("Your GameMode changed to creative");
}
else if (cmd[0] == "s"){
Level.setGameMode(0);
head("Your GameMode changed to survival");
 
}
if(cmd[0] == "d"){
Level.setTime(0);
head("Time set to Day!");
 
 
}
else if(cmd[0] == "n"){
Level.setTime(14000);
head("Time set to Night!");
 
}
if(cmd[0] == "lava"){
addItemInventory(500, 1);
head("§4Attack a mob");
}
if(cmd[0] == "torch"){
addItemInventory(501, 1);
head("§7Tap a Block");
}
if(cmd[0] == "dc"){
addItemInventory(502, 1);
head("§2Tap a block");
}
if(cmd[0] == "sp"){
  sp = Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), 11, "mob/char.png");
Entity.setRenderType(sp, 3);
 
 
}
 
}
 
 
function newLevel(){
head("§1Welcome Player");
head("§3Type §a/c for Creative, type §a/s for Survival");
head("§3Type §a/d for Day, type §a/n for Night");
head("§3Type §a/lava, type §a/torch, type §a/dc for Diamond Charger");
head("§3Type §a/foods for the Foods");
head("§5And also type /sp For your clone");
 
print("⚠Warning Dont Upload this mod to a website⚠");
print("🎫This mod made by James Latras");
 
 
}
 
function attackHook(attacker, victim){
if(Player.getCarriedItem() == 500){
 
setTile(Entity.getX(victim), Entity.getY(victim)+1, Entity.getZ(victim), 10);
 
}
 
 
}
 
function leaveGame(){
 
print("THANKS FOR USING MY MOD");
print("HOPE YOU ENJOY :)");
print("THANKS FOR USING MY MOD");
print("HOPE YOU ENJOY :)");
 
}
