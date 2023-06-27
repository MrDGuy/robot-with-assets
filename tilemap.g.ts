// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "startTile":
            case "tile1":return tile1;
            case "goalTile":
            case "tile2":return tile2;
            case "floorTile":
            case "tile3":return tile3;
            case "coinTile":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
