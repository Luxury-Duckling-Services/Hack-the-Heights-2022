class PokemonsController < ApplicationController

    def index
        render json: Pokemon.all.order("name")
    end

end
