git filter-branch --commit-filter '
        if [[ "$GIT_AUTHOR_NAME" = "urbanpt" ]];
        then
                GIT_AUTHOR_NAME="gtsamsapo";
                GIT_AUTHOR_EMAIL="gtsamsapo@sapo.pt";
				GIT_COMMITTER_NAME="gtsamsapo";
				GIT_COMMITTER_EMAIL="gtsamsapo@sapo.pt";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' --tag-name-filter cat -- --all
