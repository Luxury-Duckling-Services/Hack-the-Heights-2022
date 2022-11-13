class OwnershipsController < ApplicationController

    def index
        render json: Ownership.all
    end

end
