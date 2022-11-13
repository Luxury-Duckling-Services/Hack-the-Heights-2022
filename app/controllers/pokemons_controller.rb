class PokemonsController < ApplicationController

    def index
        render json: Pokemon.all, each_serializer: PokemonSerializer
    end

end
