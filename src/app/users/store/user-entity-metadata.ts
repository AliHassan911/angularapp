import { EntityMetadataMap } from "@ngrx/data";
import { Users } from "./users";

export const userEntityMetadata : EntityMetadataMap = {

    User:{
        selectId:(user:Users) => user.id
    }

}
