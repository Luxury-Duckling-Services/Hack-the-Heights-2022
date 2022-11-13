class OwnershipsController < ApplicationController

    def index
        render json: Ownership.all
    end

    def create
        ownership = Ownership.create!(ownership_params)
        render json: ownership, status: :created
    end

    private

    def ownership_params
        params.permit(:pokemon_id , :level)
    end
end
