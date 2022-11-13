class OwnershipsController < ApplicationController

    def index
        render json: Ownership.all.order("id")
    end

    def create
        ownership = Ownership.create!(ownership_params)
        render json: ownership, status: :created
    end

    def update
        ownership = Ownership.find_by(id: params[:ownership_id])
        ownership.update(level: ownership.level + 1)
        render json: ownership
    end

    private

    def ownership_params
        params.permit(:pokemon_id , :level)
    end
end
