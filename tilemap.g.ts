// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level1":return tiles.createTilemap(hex`18001800000000010f0f010000010000000100000100000000000000000000010f0f010000010000000100000100000000000000020202030202030202030202020302020a00000000000000000000010000011111010f0f0f0100000100000000000000000000010000011111010f0f0f0100000100000000000000000000010000011111010f0f0f01000001000000000000000202020302020302020b0202020302020a000000000000000f0f0f0111110105060000060401000001000000000000000f0f0f0111110108090000090701000001000000000000000202020302020a080e0e0e0e070c02020302020202020202000000010f0f01080e0e0e0e070100000112121212000000000000010f0f0108090e0e09070100000112121212000000000000010f0f0108090909090701000001121212120000000202020302020302020d0202020302020a12121212000000000000010000010000010f0f0f0100000112121212000000000000010000010000010f0f0f01000001121212120000000202020b02020b0202030202020b02020302020202020202000000000000000000011010101010100100000000000000000000000000000000011010101010100100000000000000000000000000000000011010101010100100000000000000000000000000000000011010101010100100000000000000000000000000000000010000000000000100000000000000000000000000000000010000000000000100000000000000000000000000000000010000000000000100000000000000`, img`
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
........................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,sprites.skillmap.islandTile2,sprites.skillmap.islandTile0,sprites.skillmap.islandTile1,sprites.skillmap.islandTile5,sprites.skillmap.islandTile3,sprites.skillmap.islandTile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile12,myTiles.tile13,myTiles.tile14], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile9":
            case "tile11":return tile11;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile8":
            case "tile10":return tile10;
            case "myTile10":
            case "tile12":return tile12;
            case "myTile11":
            case "tile13":return tile13;
            case "myTile12":
            case "tile14":return tile14;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
